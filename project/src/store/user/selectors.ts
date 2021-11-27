import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {UserData} from '../../types/auth-data';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.userReducer].authorizationStatus;
export const getUserInfo = (state: State): UserData | undefined => state[NameSpace.userReducer].user;
