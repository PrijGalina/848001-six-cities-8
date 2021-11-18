import {PointExpression} from 'leaflet';

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


export const CITIES = [ 'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = 'http://localhost:3000/img/pin.svg';
export const URL_MARKER_CURRENT = 'http://localhost:3000/img/pin-active.svg';

export const PIN_SIZE: PointExpression = [20, 30];
export const PIN_ANCHOR: PointExpression = [10, 30];

export const PagesClass = new Map ([
  ['Home', 'page__main--index'],
  ['LogIn', 'page__main--login'],
  ['Favorites', 'page__main--favorites'],
  ['Property', 'page__main--property'],
  ['undefined', 'page__main--undefined'],
]);

export enum PagesApp {
  Home = 'Home',
  LogIn = 'LogIn',
  Favorites = 'Favorites',
  Property = 'Property',
  undefined = 'undefined',
}

export const OFFER_IN_HOME = {
  article: 'cities__place-card',
  image: 'cities__image-wrapper',
  info: '',
};

export const OFFER_IN_FAVORITES = {
  article: 'favorites__card',
  image: 'favorites__image-wrapper',
  info: 'favorites__card-info',
};

export const OFFER_IN_PROPERTY = {
  article: 'near-places__card',
  image: 'near-places__image-wrapper',
  info: '',
};

export const BOOKMARK_CARD = {
  width: 18,
  height: 19,
};

export const BOOKMARK_DETAIL = {
  width: 31,
  height: 33,
};

export const FAVORITE_PAGE_ICON = {
  width: '150',
  height: '110',
};

export const FAVORITE_ICON = {
  width: '260',
  height: '200',
};

export const MAP_PROPERTY = {
  link : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  zoomCity: 10,
  zoomLocation: 8,
  propertyMapSize: {
    width: 1144,
    height: 579,
  },
  homeMapSize: {
    width: 512,
    height: 752,
  },
};

export const LOGO_PROPERTY = {
  footer: {
    width: '64',
    height: '33',
  },
  header: {
    width: '81',
    height: '41',
  },
};

export enum SortValue {
  Popular = 'Popular',
  Asc = 'Price: low to high',
  Desc = 'Price: high to low',
  Rated = 'Top rated first',
}
