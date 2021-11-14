import { ActiveCityAction, OffersListAction, AuthorizationStatusAction, OfferInFocusAction} from '../store/action';

export enum ActionType {
  ActiveCity = 'main/ActiveCity',
  OffersList = 'main/OffersList',
  OfferInFocus = 'main/OfferInFocus',
  Authorization = 'user/AuthorizationStatus',
  Map = 'map/Map',
}

export type Actions =
  | ReturnType<typeof ActiveCityAction>
  | ReturnType<typeof OffersListAction>
  | ReturnType<typeof OfferInFocusAction>
  | ReturnType<typeof AuthorizationStatusAction>;
