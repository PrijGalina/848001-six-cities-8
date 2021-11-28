import dayjs from 'dayjs';
import {Offer} from './types/offer';
import {ReviewType} from './types/review';
import {RATING_STARS, RATING_STYLE, SortValue, AuthorizationStatus} from './const';

export const getRatingStyle = (rating: number): number  => {
  rating = Math.round(rating);

  switch(rating){
    case RATING_STARS.one:
      return RATING_STYLE.one;
    case RATING_STARS.two:
      return RATING_STYLE.two;
    case RATING_STARS.three:
      return RATING_STYLE.three;
    case RATING_STARS.four:
      return RATING_STYLE.four;
    case RATING_STARS.five:
      return RATING_STYLE.five;
    default:
      return RATING_STYLE.zero;
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

export const sortOffersRating = (offerA: Offer, offerB: Offer): number => Math.sign(offerB.rating - offerA.rating);

export const sortOffersAsc = (offerA: Offer, offerB: Offer): number => Math.sign(offerB.price -  offerA.price);

export const sortOffersDesc = (offerA: Offer, offerB: Offer): number => Math.sign(offerA.price -  offerB.price);

export const sortCommentsByDate = (commentA: ReviewType, commentB: ReviewType): number => dayjs(commentB.date).diff(dayjs(commentA.date));

export const getSortOffers = (offers: Offer[], sortValue: string): Offer[] => {
  switch (sortValue) {
    case SortValue.Popular:
      return offers.sort(sortOffersRating);
    case SortValue.Asc:
      return offers.sort(sortOffersDesc);
    case SortValue.Desc:
      return offers.sort(sortOffersAsc);
    case SortValue.Rated:
      return offers.sort(sortOffersRating);
    default:
      return offers.sort(sortOffersRating);
  }
};

export const getFiltredOffers = (offers: Offer[], city: string): Offer[] => offers.filter((offer: Offer) => offer.city.name === city);
