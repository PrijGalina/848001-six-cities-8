export enum ActionType {
  ChangeActiveCity = 'main/changeActiveCity',
  ChangeAuthorizationStatus = 'main/changeAuthorizationStatus',
}

export type ChangeActiveCityAction = {
  type: ActionType.ChangeActiveCity;
  payload: string,
};

export type ChangeAuthorizationStatusAction = {
  type: ActionType.ChangeAuthorizationStatus;
};

export type Actions = ChangeActiveCityAction | ChangeAuthorizationStatusAction;
