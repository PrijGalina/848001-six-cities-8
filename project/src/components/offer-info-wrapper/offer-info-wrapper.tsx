import {Link} from 'react-router-dom';

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
  let ratingWidth = 0;
  switch (rating) {
    case 1:
      ratingWidth = 20;
      break;
    case 2:
      ratingWidth = 40;
      break;
    case 3:
      ratingWidth = 60;
      break;
    case 4:
      ratingWidth = 80;
      break;
    case 5:
      ratingWidth = 100;
      break;
  }

  return ratingWidth;
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
            <use xlinkHref="#icon-bookmark"></use>
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
