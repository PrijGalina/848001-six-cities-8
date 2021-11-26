import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {Offer} from '../types/offer';
import {ReviewType} from '../types/review';
import {MapCity} from '../types/map';
import {AuthorizationStatus, SortValue, AppRoute} from '../const';

export const loadOffers = createAction<Offer[]>(ActionType.LoadOffers);

export const loadOffersNearby = createAction<Offer[]>(ActionType.LoadOffersNearby);

export const loadInfoAboutOffer = createAction<Offer | undefined>(ActionType.LoadInfoAboutOffer);

export const loadFavoriteOffers = createAction<Offer[]>(ActionType.LoadFavoriteOffers);

export const loadCommentsAboutOffer = createAction<ReviewType[]>(ActionType.LoadCommentsAboutOffer);

export const setActiveCity = createAction<MapCity>(ActionType.SetActiveCity);

export const setOfferActive = createAction<Offer | undefined>(ActionType.SetOfferActive);

export const setSortOffers = createAction<SortValue>(ActionType.SetSortOffers);

export const login = createAction<AuthorizationStatus>(ActionType.SetAuthStatus);

export const logout = createAction(ActionType.DeleteAuthorization);

export const redirectToRoute = createAction<AppRoute>(ActionType.RedirectToRoute);
