import {ThunkActionResult} from '../types/action';
import {loadOffersAction, authorizationStatusAction, requireLogoutAction,loadOffersNearbyAction, loadOfferInfoAction} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import {adaptToClient, adaptToClientOneOffer} from '../services/adapters';
import {OfferDTO} from '../types/server-types';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferDTO[]>(APIRoute.Offers);
    const newData = adaptToClient(data);
    dispatch(loadOffersAction(newData));
  };

export const fetchOfferInfoAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const path = `${APIRoute.Offers}/${id}`;
    const {data} = await api.get<OfferDTO>(path);
    // eslint-disable-next-line no-console
    console.log(data);
    const newData = adaptToClientOneOffer(data);
    dispatch(loadOfferInfoAction(newData));
  };

export const fetchOfferNearbyAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const path = `${APIRoute.Offers}:${id}/nearby`;

    const {data} = await api.get<OfferDTO[]>(path);
    const newData = adaptToClient(data);
    dispatch(loadOffersNearbyAction(newData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(authorizationStatusAction(AuthorizationStatus.NoAuth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(authorizationStatusAction(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogoutAction());
  };
