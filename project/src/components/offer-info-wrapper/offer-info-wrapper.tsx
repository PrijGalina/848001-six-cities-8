import {Link} from 'react-router-dom';
import RatingBlock from '../rating-block/rating-block';
import BookmarkBlock from '../bookmark-block/bookmark-block';
import cn from 'classnames';
import {Offer} from '../../types/offer';

type OfferInfoWrapperProps = {
  infoClass: string,
  pathToOffer: string,
  offer: Offer,
};

export default function OfferInfoWrapper({infoClass, pathToOffer, offer}: OfferInfoWrapperProps): JSX.Element {
  const {isFavorite, rating, price, title, type, id} = offer;

  return (
    <div className={cn ('place-card__info', infoClass)}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkBlock isFavorite={isFavorite} forOffer={id}/>
      </div>
      <RatingBlock rating={rating}/>
      <h2 className="place-card__name">
        <Link to={pathToOffer}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
}
