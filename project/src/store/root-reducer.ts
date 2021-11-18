import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
