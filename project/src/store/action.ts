import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {AuthorizationStatus, SORT_VALUE} from '../const';
import {Offer} from '../types/offer';

export const ActiveCityAction = createAction<string>(ActionType.ActiveCity);

export const OffersListAction = createAction<string>(ActionType.OffersList);

export const AuthorizationStatusAction = createAction<AuthorizationStatus>(ActionType.Authorization);

export const OfferInFocusAction = createAction<Offer | undefined>(ActionType.OfferInFocus);

export const OffersSortAction = createAction<SORT_VALUE>(ActionType.OffersSort);
