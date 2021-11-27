import {Offer} from './offer';
import {ReviewType} from './review';
import {MapCity} from './map';
import {RootState} from '../store/root-reducer';
import {AuthorizationStatus} from '../const';
import {UserData} from './auth-data';

export type MainType = {
  city: MapCity,
  offers: Offer[],
  isDataLoaded: boolean,
  sort: string,
  favorites: Offer[],
};

export type OfferType = {
  info: Offer | undefined,
  focus?: Offer | undefined,
  comments: ReviewType[] | [],
  nearby: Offer[] | [],
  newCommentText: string,
  newCommentRating: number,
};

export type UserType = {
  authorizationStatus: AuthorizationStatus,
  user: UserData | undefined;
};

export type State = RootState;
