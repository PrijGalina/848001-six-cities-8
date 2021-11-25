import {createReducer} from '@reduxjs/toolkit';
import {setAuthStatus, deleteAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';
import {UserType} from '../../types/state';

const initialState: UserType = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(deleteAuthorization, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {user};
