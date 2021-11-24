import {createReducer} from '@reduxjs/toolkit';
import {CITIES, citiesData} from '../../const';
import {getSortOffers} from '../../utils';
import {activeCityAction, offerInFocusAction, offersSortAction, loadOffersAction, loadOffersNearbyAction, loadOfferInfoAction, loadCommentsAction} from '../action';
import {AppData} from '../../types/state';
import {Offer} from '../../types/offer';

const cityCurrent = citiesData.filter((cityObj) => cityObj.title === CITIES[0])[0];

const initialState: AppData = {
  city: cityCurrent,
  offers: [],
  isDataLoaded: false,
  offersSort: 'popular',
  offerInFocus: undefined,
  offerInfo: undefined,
  commentsList: [],
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCityAction, (state, action) => {
      const cityData = citiesData.filter((cityObj) => cityObj.title === action.payload.title)[0];

      state.city = {
        title: cityData.title,
        lat: cityData.lat,
        lng: cityData.lng,
        zoom: cityData.zoom,
      };
    })
    .addCase(loadOffersAction, (state, action) => {
      const {offers} = action.payload;
      const offersFilter = offers.filter((offer: Offer) => offer.city.name === state.city.title);
      state.offers = offersFilter;
      state.isDataLoaded = true;
    })
    .addCase(offerInFocusAction, (state, action) => {
      state.offerInFocus = action.payload;
    })
    .addCase(offersSortAction, (state, action) => {
      state.offersSort = action.payload;
      state.offers = getSortOffers(state.offers, action.payload);
    })
    .addCase(loadOffersNearbyAction, (state, action) => {
      state.offerNearby = action.payload;
    })
    .addCase(loadOfferInfoAction, (state, action) => {
      state.offerInfo = action.payload;
    })
    .addCase(loadCommentsAction, (state, action) => {
      state.commentsList = action.payload;
    });
});

export {appData};
