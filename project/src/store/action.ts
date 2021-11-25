import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {AuthorizationStatus, SortValue} from '../const';
import {Offer} from '../types/offer';
import {ReviewType} from '../types/review';
import {MapCity} from '../types/map';

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: {offers},
  }),
);

export const loadOffersNearby = createAction<Offer[]>(ActionType.LoadOffersNearby);

export const loadInfoAboutOffer = createAction(
  ActionType.LoadInfoAboutOffer,
  (offer: Offer | undefined) => ({
    payload: offer,
  }),
);

export const loadCommentsAboutOffer = createAction(
  ActionType.LoadCommentsAboutOffer,
  (comment: ReviewType[]) => ({
    payload: comment,
  }),
);

export const setActiveCity = createAction<MapCity>(ActionType.SetActiveCity);

export const setAuthStatus = createAction<AuthorizationStatus>(ActionType.SetAuthStatus);

export const setOfferActive = createAction<Offer | undefined>(ActionType.SetOfferActive);

export const deleteAuthorization = createAction(ActionType.DeleteAuthorization);

export const setSortOffers = createAction<SortValue>(ActionType.SetSortOffers);


