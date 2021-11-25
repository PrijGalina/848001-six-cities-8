import {combineReducers} from 'redux';
import {main} from './main/main';
import {user} from './user/user';
import {offer} from './offer/offer';

export enum NameSpace {
  mainReducer = 'MAIN',
  userReducer = 'USER',
  offerReducer = 'OFFER',
}

export const rootReducer = combineReducers({
  [NameSpace.mainReducer]: main,
  [NameSpace.userReducer]: user,
  [NameSpace.offerReducer]: offer,
});

export type RootState = ReturnType<typeof rootReducer>;
