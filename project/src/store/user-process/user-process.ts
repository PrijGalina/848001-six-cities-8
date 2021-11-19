import {createReducer} from '@reduxjs/toolkit';
import {authorizationStatusAction, requireLogoutAction} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(authorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogoutAction, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {userProcess};
