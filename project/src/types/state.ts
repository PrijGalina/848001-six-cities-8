import {Offer} from './offer';
import {ReviewType} from './review';
import {MapCity} from './map';
import {RootState} from '../store/root-reducer';
import {AuthorizationStatus} from '../const';

export type AppData = {
  city: MapCity,
  offers: Offer[],
  isDataLoaded: boolean,
  offerInFocus: Offer | undefined,
  offersSort: string,
  offerNearby?: Offer[],
  offerInfo: Offer | undefined,
  commentsList?: ReviewType[],
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type State = RootState;
