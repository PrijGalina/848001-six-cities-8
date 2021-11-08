import {ActionType, ChangeActiveCityAction, ChangeAuthorizationStatusAction} from '../types/action';

export const changeActiveCity = (city: string): ChangeActiveCityAction => ({
  type: ActionType.ChangeActiveCity,
  payload: city,
});

export const changeAuthorizationStatus = (): ChangeAuthorizationStatusAction => ({
  type: ActionType.ChangeAuthorizationStatus,
});
