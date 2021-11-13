import {Offer} from './offer';
import {AuthorizationStatus} from '../const';

export enum ActionType {
  ActiveCity = 'main/ActiveCity',
  OffersList = 'main/OffersList',
  Authorization = 'user/AuthorizationStatus',
}

export type ActiveCityAction = {
  type: ActionType.ActiveCity;
  payload: string,
};

export type OffersListAction = {
  type: ActionType.OffersList;
  payload: Offer[];
};

export type AuthorizationStatusAction = {
  type: ActionType.Authorization;
  payload: AuthorizationStatus;
}

export type Actions = ActiveCityAction | OffersListAction | AuthorizationStatusAction;
