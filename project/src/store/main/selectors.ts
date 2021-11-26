import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {MapCity} from '../../types/map';

export const getCity = (state: State): MapCity => state[NameSpace.mainReducer].city;
export const getOffers = (state: State): Offer[] => state[NameSpace.mainReducer].offers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.mainReducer].favorites;
export const getDataLoad = (state: State): boolean => state[NameSpace.mainReducer].isDataLoaded;
export const getSort = (state: State): string => state[NameSpace.mainReducer].sort;
