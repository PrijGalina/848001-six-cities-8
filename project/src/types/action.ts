import { ActiveCityAction, OffersListAction, AuthorizationStatusAction, OfferInFocusAction, OffersSortAction} from '../store/action';

export enum ActionType {
  ActiveCity = 'main/ActiveCity',
  OffersList = 'main/OffersList',
  OfferInFocus = 'main/OfferInFocus',
  Authorization = 'user/AuthorizationStatus',
  OffersSort = 'main/OffersSort',
}

export type Actions =
  | ReturnType<typeof ActiveCityAction>
  | ReturnType<typeof OffersListAction>
  | ReturnType<typeof OfferInFocusAction>
  | ReturnType<typeof OffersSortAction>
  | ReturnType<typeof AuthorizationStatusAction>;
