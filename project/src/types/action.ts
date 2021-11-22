import {Action} from 'redux';
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
//import {Offer} from '../types/offer';

export enum ActionType {
  ActiveCity = 'data/activeCity',
  OffersList = 'data/offersList',
  OfferInFocus = 'data/offerInFocus',
  Authorization = 'user/authorizationStatus',
  OffersSort = 'data/offersSort',
  LoadOffers = 'data/loadOffers',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'user/redirectToRoute',
  UpdateOffers = 'data/updateOffers',
  OfferActiveId = 'data/offeraActiveId',
  OfferNearby = 'data/offerNearby',
  OfferInfo = 'data/offerInfo',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
