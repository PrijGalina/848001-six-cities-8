import {ActionType, Actions} from '../../types/action';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const initialState = {
  //authorizationStatus: AuthorizationStatus.Unknown,
  authorizationStatus: AuthorizationStatus.Auth,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.Authorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export {userProcess};
