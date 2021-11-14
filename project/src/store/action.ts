import {ActionType} from '../types/action';
import {AuthorizationStatus} from '../const';
import {Offer} from '../types/offer';

export const ActiveCityAction = (city: string) => ({
  type: ActionType.ActiveCity,
  payload: city,
} as const);

export const OffersListAction = (city: string) => ({
  type: ActionType.OffersList,
  payload: city,
} as const);

export const AuthorizationStatusAction = (status: AuthorizationStatus) => ({
  type: ActionType.Authorization,
  payload: status,
} as const);

export const OfferInFocusAction = (offer: Offer | undefined) => ({
  type: ActionType.OfferInFocus,
  payload: offer,
} as const);
