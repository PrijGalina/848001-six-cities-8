import {createReducer} from '@reduxjs/toolkit';
import {setOfferActive, loadOffersNearby, loadInfoAboutOffer, loadCommentsAboutOffer} from '../action';
import {OfferType} from '../../types/state';

const initialState: OfferType = {
  focus: undefined,
  info: undefined,
  comments: [],
  nearby: [],
};

const offer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOfferActive, (state, action) => {
      state.focus = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(loadInfoAboutOffer, (state, action) => {
      state.info = action.payload;
    })
    .addCase(loadCommentsAboutOffer, (state, action) => {
      state.comments = action.payload;
    });
});

export {offer};
