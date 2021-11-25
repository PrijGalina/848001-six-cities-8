import {saveToken, dropToken, Token} from '../services/token';
import {adaptOffersToClient, adaptOfferToClient, adaptCommentsToClient} from '../services/adapters';
import {loadOffers, setAuthStatus, deleteAuthorization,loadOffersNearby, loadInfoAboutOffer, loadCommentsAboutOffer} from './action';
import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {OfferDTO, CommentDTO} from '../types/server-types';
import {APIRoute, AuthorizationStatus} from '../const';

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
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
      });
  };

export const sendAuthData = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
  };

export const deleteAuthData = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(deleteAuthorization());
  };
