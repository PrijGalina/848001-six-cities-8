import {Offer} from './offer';

export enum ActionType {
  ActiveCity = 'main/ActiveCity',
  OffersList = 'main/OffersList',
}

export type ActiveCityAction = {
  type: ActionType.ActiveCity;
  payload: string,
};

export type OffersListAction = {
  type: ActionType.OffersList;
  payload: Offer[];
};

export type Actions = ActiveCityAction | OffersListAction;
