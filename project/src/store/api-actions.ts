import {saveToken, dropToken, Token} from '../services/token';
import {adaptOffersToClient, adaptOfferToClient, adaptCommentsToClient} from '../services/adapters';
import {loadOffers, login, logout,loadOffersNearby, loadInfoAboutOffer, loadCommentsAboutOffer, loadFavoriteOffers, redirectToRoute} from './action';
import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {OfferDTO, CommentDTO} from '../types/server-types';
import {OfferStatusFavorite} from '../types/offer';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {toast} from 'react-toastify';

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

export const fetchAuthCheckAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(login(AuthorizationStatus.NoAuth));
      });
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
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(login(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(login(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(logout());
  };
