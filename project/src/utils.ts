import {RATING_STARS, RATING_STYLE, SORT_VALUE} from './const';
import {Offer} from './types/offer';
import {AuthorizationStatus} from './const';

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

export const isCheckedAuth = (authorizationStatus: string): boolean => authorizationStatus === AuthorizationStatus.Unknown;

export const getOffersInCity = (offers: Offer[], cityValue: string): Offer[] => offers.filter(({ city }) => (city.name === cityValue));

export const sortOffersRating = (offerA: Offer, offerB: Offer): number => {
  if (offerA.rating < offerB.rating) {
    return 1;
  }
  else if (offerA.rating > offerB.rating) {
    return -1;
  }
  else {
    return 0;
  }
};

export const sortOffersAsc = (offerA: Offer, offerB: Offer): number => {
  if (offerA.price < offerB.price) {
    return 1;
  }
  else if(offerA.price > offerB.price) {
    return -1;
  }
  else {
    return 0;
  }
};

export const sortOffersDesc = (offerA: Offer, offerB: Offer): number => {
  if (offerA.price < offerB.price) {
    return -1;
  }
  else if (offerA.price > offerB.price) {
    return 1;
  }
  else {
    return 0;
  }
};

export const getSortOffers = (offers: Offer[], sortValue: string): Offer[] => {
  switch (sortValue) {
    case SORT_VALUE.popular:
      return offers.sort(sortOffersRating);
    case SORT_VALUE.asc:
      return offers.sort(sortOffersDesc);
    case SORT_VALUE.desc:
      return offers.sort(sortOffersAsc);
    case SORT_VALUE.rated:
      return offers.sort(sortOffersRating);
    default:
      return offers.sort(sortOffersRating);
  }
};
