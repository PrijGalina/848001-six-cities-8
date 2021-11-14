import {Offer} from '../types/offer';
import {RootState} from '../store/root-reducer';
import {AuthorizationStatus} from '../const';

export type AppData = {
  city: string,
  offers: Offer[],
  isDataLoaded: boolean,
  offerInFocus?: Offer | undefined,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type State = RootState;
