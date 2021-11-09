import {ActionType, ActiveCityAction, OffersListAction} from '../types/action';
import {Offer} from '../types/offer';

export const activeCity = (city: string): ActiveCityAction => ({
  type: ActionType.ActiveCity,
  payload: city,
});

export const offersList = (offers: Offer[]): OffersListAction => ({
  type: ActionType.OffersList,
  payload: offers,
});
