import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {MapCity} from '../../types/map';
import {ReviewType} from '../../types/review';

export const getCity = (state: State): MapCity => state[NameSpace.data].city;
export const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
export const getDataLoad = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getOffer = (state: State): Offer | undefined => state[NameSpace.data].offerInFocus;
export const getSort = (state: State): string => state[NameSpace.data].offersSort;
export const getOfferIdActive = (state: State): number | undefined => state[NameSpace.data].offerActiveId;
export const getOfferInfo = (state: State): Offer | undefined => state[NameSpace.data].offerInfo;
export const getComments = (state: State): ReviewType[] | undefined => state[NameSpace.data].commentsList;
