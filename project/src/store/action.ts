import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {AuthorizationStatus, SortValue} from '../const';
import {Offer} from '../types/offer';

export const ActiveCityAction = createAction<string>(ActionType.ActiveCity);

export const OffersListAction = createAction<string>(ActionType.OffersList);

export const AuthorizationStatusAction = createAction<AuthorizationStatus>(ActionType.Authorization);

export const OfferInFocusAction = createAction(
  ActionType.OfferInFocus,
  (offer: Offer | undefined) => ({
    payload: offer,
  }),
);

export const OffersSortAction = createAction<SortValue>(ActionType.OffersSort);
