import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {ReviewType} from '../../types/review';


export const getOfferActive = (state: State): Offer | undefined => state[NameSpace.offerReducer].focus;
export const getOfferInfo = (state: State): Offer | undefined => state[NameSpace.offerReducer].info;
export const getComments = (state: State): ReviewType[] | [] => state[NameSpace.offerReducer].comments;
export const getOffersNearby = (state: State): Offer[] | [] => state[NameSpace.offerReducer].nearby;
export const getRating = (state: State): number => state[NameSpace.offerReducer].newCommentRating;
export const getCommentText = (state: State): string => state[NameSpace.offerReducer].newCommentText;
