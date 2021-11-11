import {Offer} from '../types/offer';
import {RootState} from '../store/root-reducer';
import {AuthorizationStatus} from '../types/action';

export type AppData = {
  city: string,
  offers: Offer[],
  isDataLoaded: boolean,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type State = RootState;
