import {Link} from 'react-router-dom';
import {RATING_STARS, RATING_STYLE} from '../../const';

type OfferInfoWrapperProps = {
  isFavoritesPage: boolean,
  pathToOffer: string,
  isFavorite: boolean,
  rating: number,
  price: number,
  title: string,
  type: string,
};

function getRatingStyle(rating: number): number {
  rating = Math.round(rating);
  let value = RATING_STYLE.zero;
  /*
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
    }
  */
  switch(rating){
    case RATING_STARS.one:
      value = RATING_STYLE.one;
      break;
    case RATING_STARS.two:
      value = RATING_STYLE.two;
      break;
    case RATING_STARS.three:
      value = RATING_STYLE.three;
      break;
    case RATING_STARS.four:
      value = RATING_STYLE.four;
      break;
    case RATING_STARS.five:
      value = RATING_STYLE.five;
      break;
  }

  return value;
}

function OfferInfoWrapper({isFavoritesPage, pathToOffer, isFavorite, rating, price, title, type}: OfferInfoWrapperProps): JSX.Element {
  const isBookmark = isFavorite && ('place-card__bookmark-button--active');

  return (
    <div className={`${isFavoritesPage && 'favorites__card-info'} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${isBookmark}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${getRatingStyle(rating)}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={pathToOffer}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}

export default OfferInfoWrapper;
