import {Action} from 'redux';
import {ThunkAction,ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  LoadOffers = 'main/loadOffers',
  LoadOffersNearby = 'offer/loadOffersNearby',
  LoadFavoriteOffers = 'main/loadFavoriteOffers',
  LoadInfoAboutOffer = 'offer/loadInfoAboutOffer',
  LoadCommentsAboutOffer = 'offer/loadCommentsAboutOffer',
  DeleteAuthorization = 'user/logout',
  RedirectToRoute = 'user/redirectToRoute',
  SetActiveCity = 'main/setActiveCity',
  SetOfferActive = 'offer/setOfferActive',
  SetAuthStatus = 'user/login',
  SetSortOffers = 'main/setSortOffers',
  SetFavoriteStatus = 'offer/setFavoriteStatus',
  setUserInfo ='user/setUserInfo',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
