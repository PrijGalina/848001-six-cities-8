import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorization = (state: State): AuthorizationStatus => state[NameSpace.userReducer].authorizationStatus;
