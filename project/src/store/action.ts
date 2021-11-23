import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {AuthorizationStatus, SortValue} from '../const';
import {Offer} from '../types/offer';
import {ReviewType} from '../types/review';
import {MapCity} from '../types/map';

export const activeCityAction = createAction<MapCity>(ActionType.ActiveCity);

export const authorizationStatusAction = createAction<AuthorizationStatus>(ActionType.Authorization);

export const offerInFocusAction = createAction<Offer | undefined>(ActionType.OfferInFocus);

export const loadOffersAction = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: {offers},
  }),
);

export const updateOffersList = createAction(ActionType.UpdateOffers);

export const requireLogoutAction = createAction(ActionType.RequireLogout);

export const offersSortAction = createAction<SortValue>(ActionType.OffersSort);

export const offerActiveIdAction = createAction<number | undefined>(ActionType.OfferActiveId);

export const loadOffersNearbyAction = createAction<Offer[]>(ActionType.OfferNearby);

export const loadOfferInfoAction = createAction(
  ActionType.OfferInfo,
  (offer: Offer | undefined) => ({
    payload: offer,
  }),
);

export const loadCommentsAction = createAction(
  ActionType.CommentsList,
  (comment: ReviewType[] | undefined) => ({
    payload: comment,
  }),
);
