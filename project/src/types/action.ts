import {Action} from 'redux';
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  ActiveCity = 'data/ActiveCity',
  OffersList = 'data/OffersList',
  OfferInFocus = 'data/OfferInFocus',
  Authorization = 'user/AuthorizationStatus',
  OffersSort = 'data/OffersSort',
  LoadOffers = 'data/LoadOffers',
  RequireLogout = 'user/RequireLogout'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
