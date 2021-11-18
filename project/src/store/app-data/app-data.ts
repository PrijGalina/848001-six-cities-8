import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../../const';
import {getOffersInCity, getSortOffers} from '../../utils';
import {activeCityAction, offerInFocusAction, offersSortAction, offersListAction} from '../action';
import {AppData} from '../../types/state';

const initialState: AppData = {
  city: CITIES[0],
  offers: [],
  isDataLoaded: true,
  offersSort: 'popular',
  offerInFocus: undefined,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersListAction, (state, action) => {
      state.offers = getOffersInCity(state.offers, action.payload);
      state.isDataLoaded = true;
    })
    .addCase(offerInFocusAction, (state, action) => {
      state.offerInFocus = action.payload;
    })
    .addCase(offersSortAction, (state, action) => {
      state.offersSort = action.payload;
      state.offers = getSortOffers(state.offers, action.payload);
    });
});

export {appData};
