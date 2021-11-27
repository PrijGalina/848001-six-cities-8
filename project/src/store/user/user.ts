import {createReducer} from '@reduxjs/toolkit';
import {login, logout, setUserInfo} from '../action';
import {AuthorizationStatus} from '../../const';
import {UserType} from '../../types/state';

const initialState: UserType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserInfo, (state, action) => {
      state.user = action.payload;
    });
});

export {user};
