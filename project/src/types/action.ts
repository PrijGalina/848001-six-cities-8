import {Offer} from './offer';

export enum ActionType {
  ActiveCity = 'main/ActiveCity',
  OffersList = 'main/OffersList',
  AuthorizationStatus = 'user/AuthorizationStatus',
}

export type ActiveCityAction = {
  type: ActionType.ActiveCity;
  payload: string,
};

export type OffersListAction = {
  type: ActionType.OffersList;
  payload: Offer[];
};

export type AuthorizationStatus = {
  type: ActionType.AuthorizationStatus;
  payload: string,
}

export type Actions = ActiveCityAction | OffersListAction | AuthorizationStatus;
