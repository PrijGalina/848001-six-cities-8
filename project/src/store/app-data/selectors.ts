import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';

export const getCity = (state: State): string => state[NameSpace.data].city;
export const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
export const getDataLoad = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getOffer = (state: State): Offer | undefined => state[NameSpace.data].offerInFocus;
export const getSort = (state: State): string => state[NameSpace.data].offersSort;
