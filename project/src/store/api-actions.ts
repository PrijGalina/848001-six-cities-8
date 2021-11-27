import {ThunkActionResult} from '../types/action';
import {loadOffers, login, logout, loadOffersNearby, loadInfoAboutOffer, loadCommentsAboutOffer, loadFavoriteOffers, redirectToRoute, setUserInfo} from './action';
import {saveToken, dropToken} from '../services/token';
import { adaptOffersToClient, adaptOfferToClient, adaptCommentsToClient, adaptUserToClient} from '../services/adapters';
import {toast} from 'react-toastify';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {OfferDTO, CommentDTO, UserDTO} from '../types/server-types';
import {OfferStatusFavorite, CommentForm} from '../types/offer';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferDTO[]>(APIRoute.Offers);
    const adaptedData = adaptOffersToClient(data);
    dispatch(loadOffers(adaptedData));
  };

export const fetchOfferInfoAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const path = `${APIRoute.Offers}/${id}`;
    const {data} = await api.get<OfferDTO>(path);
    const adaptedData = adaptOfferToClient(data);
    dispatch(loadInfoAboutOffer(adaptedData));
  };

export const fetchOffersNearbyAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const path = `${APIRoute.Offers}/${id}/nearby`;
    const {data} = await api.get<OfferDTO[]>(path);
    const adaptedData = adaptOffersToClient(data);
    dispatch(loadOffersNearby(adaptedData));
  };

export const fetchCommentsAboutAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const path = `${APIRoute.Comments}/${id}`;
    const {data} = await api.get<CommentDTO[]>(path);
    const adaptedData = adaptCommentsToClient(data);
    dispatch(loadCommentsAboutOffer(adaptedData));
  };

export const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferDTO[]>(APIRoute.Favorite);
    const adaptedData = adaptOffersToClient(data);
    dispatch(loadFavoriteOffers(adaptedData));
  };

export const sendOfferStatusFavoriteAction = ({id, status}: OfferStatusFavorite): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const path = `${APIRoute.Favorite}/${id}/${status}`;
    const {data} = await api.post<OfferDTO>(path);
    const adaptedData = adaptOfferToClient(data);
    dispatch(loadInfoAboutOffer(adaptedData));
    dispatch(fetchOffersAction());
  };

export const sendNewComment = ({id, comment, rating}: CommentForm): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const path = `${APIRoute.Comments}/${id}`;
    await api.post<CommentForm>(path, {comment, rating});
    dispatch(fetchCommentsAboutAction(id));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get<UserDTO>(APIRoute.Login);
      if (response.status === 200){
        const serverData = response.data;
        const adaptedData = adaptUserToClient(serverData);
        dispatch(setUserInfo(adaptedData));
        dispatch(login(AuthorizationStatus.Auth));
      }
      else {
        dispatch(login(AuthorizationStatus.NoAuth));
      }
    }
    catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const response = await api.post<UserDTO>(APIRoute.Login, {email, password});
    const serverData = response.data;
    saveToken(serverData.token);
    const adaptedData = adaptUserToClient(serverData);
    dispatch(setUserInfo(adaptedData));
    dispatch(login(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(logout());
  };
