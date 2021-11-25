import {Action} from 'redux';
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  LoadOffers = 'main/loadOffers',
  LoadOffersNearby = 'offer/loadOffersNearby',
  LoadInfoAboutOffer = 'offer/loadInfoAboutOffer',
  LoadCommentsAboutOffer = 'offer/loadCommentsAboutOffer',
  DeleteAuthorization = 'user/deleteAuthorization',
  RedirectToRoute = 'user/redirectToRoute',
  SetActiveCity = 'main/setActiveCity',
  SetOfferActive = 'offer/setOfferActive',
  SetAuthStatus = 'user/setAuthStatus',
  SetSortOffers = 'main/setSortOffers',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
