import {RATING_STARS, RATING_STYLE} from './const';

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
