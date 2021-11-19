import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {AuthorizationStatus, SortValue} from '../const';
import {Offer} from '../types/offer';

export const activeCityAction = createAction<string>(ActionType.ActiveCity);

export const authorizationStatusAction = createAction<AuthorizationStatus>(ActionType.Authorization);

export const offerInFocusAction = createAction(
  ActionType.OfferInFocus,
  (offer: Offer | undefined) => ({
    payload: offer,
  }),
);

export const loadOffersAction = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const updateOffersList = createAction(ActionType.UpdateOffers);

export const requireLogoutAction = createAction(ActionType.RequireLogout);

export const offersSortAction = createAction<SortValue>(ActionType.OffersSort);
