import {Offer} from '../types/offer';
import {RootState} from '../store/root-reducer';
import {AuthorizationStatus} from '../const';

export type AppData = {
  city: string,
  offers: Offer[],
  isDataLoaded: boolean,
  offerInFocus: Offer | undefined,
  offersSort: string,
  offerActiveId: number | undefined,
  offerNearby?: Offer[],
  offerInfo: Offer | undefined,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type State = RootState;
