export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_STARS = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
};

export const RATING_VALUES: number[] = [5, 4, 3, 2, 1];

export const RATING_STYLE = {
  'zero': 0,
  'one': 20,
  'two': 40,
  'three': 60,
  'four': 80,
  'five': 100,
};

