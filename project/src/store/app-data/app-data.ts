import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../../const';
import {getSortOffers} from '../../utils';
import {activeCityAction, offerInFocusAction, offersSortAction, loadOffersAction} from '../action';
import {AppData} from '../../types/state';
import {Offer} from '../../types/offer';

const initialState: AppData = {
  city: CITIES[0],
  offers: [],
  isDataLoaded: false,
  offersSort: 'popular',
  offerInFocus: undefined,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      const {offers} = action.payload;
      const offersFilter = offers.filter((offer: Offer) => offer.city.name === state.city);
      state.offers = offersFilter;
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
