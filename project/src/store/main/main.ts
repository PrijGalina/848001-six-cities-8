import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setSortOffers, loadOffers, loadFavoriteOffers} from '../action';
import {MainType} from '../../types/state';
import {CITIES, citiesData} from '../../const';
import {getSortOffers} from '../../utils';

const cityCurrent = citiesData.filter((cityObj) => cityObj.title === CITIES[0])[0];

const initialState: MainType = {
  city: cityCurrent,
  offers: [],
  isDataLoaded: false,
  sort: 'Popular',
  favorites: [],
};

const main = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      const cityData = citiesData.filter((cityObj) => cityObj.title === action.payload.title)[0];
      state.city = {
        title: cityData.title,
        lat: cityData.lat,
        lng: cityData.lng,
        zoom: cityData.zoom,
      };
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = getSortOffers(action.payload, state.sort);
      state.isDataLoaded = true;
    })
    .addCase(setSortOffers, (state, action) => {
      state.sort = action.payload;
      state.offers = getSortOffers(state.offers, action.payload);
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favorites = action.payload;
    });
});

export {main};
