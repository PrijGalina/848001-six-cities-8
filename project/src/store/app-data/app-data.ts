import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../../const';
import {offers} from '../../mocks/offers';
import {getOffersInCity, getSortOffers} from '../../utils';
import {ActiveCityAction, OfferInFocusAction, OffersSortAction, OffersListAction} from '../action';
import {AppData} from '../../types/state';

const initialState:AppData = {
  city: CITIES[0],
  offers: getOffersInCity(offers, CITIES[0]),
  isDataLoaded: true,
  offersSort: 'popular',
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(ActiveCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(OffersListAction, (state, action) => {
      state.offers = getOffersInCity(offers, action.payload);
      state.isDataLoaded = true;
    })
    .addCase(OfferInFocusAction, (state, action) => {
      state.offerInFocus = action.payload;
    })
    .addCase(OffersSortAction, (state, action) => {
      state.offersSort = action.payload;
      state.offers = getSortOffers(state.offers, action.payload);
    });
});

export {appData};
