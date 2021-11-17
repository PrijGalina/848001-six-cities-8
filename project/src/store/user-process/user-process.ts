import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatusAction} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Auth,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(AuthorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {userProcess};
