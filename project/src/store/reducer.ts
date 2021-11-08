import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {CITIES} from '../const';

const initialState = {
  activeCity: CITIES[0],
  authorizationStatus: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeActiveCity:
      return {...state, activeCity: action.payload};
    case ActionType.ChangeAuthorizationStatus:
      return {...state, authorizationStatus: !state.authorizationStatus};
    default:
      return state;
  }
};

export {reducer};
