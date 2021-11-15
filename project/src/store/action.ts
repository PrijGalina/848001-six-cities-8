import {ActionType} from '../types/action';
import {AuthorizationStatus, SORT_VALUE} from '../const';
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

export const OffersSortAction = (value: SORT_VALUE) => ({
  type: ActionType.OffersSort,
  payload: value,
} as const);
