import {ThunkActionResult} from '../types/action';
import {loadOffersAction, AuthorizationcStatusAction, RequireLogout} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';
import {AuthData} from '../types/auth-data';

export const fetchOfferAction = (): ThunkActionResult => {
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffersAction(data));
  }
};

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(AuthorizationcStatusAction(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(AuthorizationcStatusAction(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(RequireLogout());
  };
