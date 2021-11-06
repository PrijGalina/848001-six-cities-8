import {Link} from 'react-router-dom';
import RatingBlock from '../rating-block/rating-block';
import BookmarkBlock from '../bookmark-block/bookmark-block';

type OfferInfoWrapperProps = {
  infoClass: string,
  pathToOffer: string,
  isFavorite: boolean,
  rating: number,
  price: number,
  title: string,
  type: string,
};

export default function OfferInfoWrapper({infoClass, pathToOffer, isFavorite, rating, price, title, type}: OfferInfoWrapperProps): JSX.Element {
  return (
    <div className={`${infoClass} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkBlock isFavorite={isFavorite}/>
      </div>
      <RatingBlock rating={rating}/>
      <h2 className="place-card__name">
        <Link to={pathToOffer}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}
