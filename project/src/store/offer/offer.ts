import {createReducer} from '@reduxjs/toolkit';
import {setOfferActive, loadOffersNearby, loadInfoAboutOffer, loadCommentsAboutOffer, setRating, setTextComment} from '../action';
import {OfferType} from '../../types/state';

const initialState: OfferType = {
  focus: undefined,
  info: undefined,
  comments: [],
  nearby: [],
  newCommentText: '',
  newCommentRating: 0,
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
    })
    .addCase(setRating, (state, action) => {
      state.newCommentRating = action.payload;
    })
    .addCase(setTextComment, (state, action) => {
      state.newCommentText = action.payload;
    });
});

export {offer};
