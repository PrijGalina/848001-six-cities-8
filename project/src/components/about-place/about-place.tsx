import {Offer} from '../../types/offer';
import PremiumBlock from '../premium-block/premium-block';
import BookmarkBlock from '../bookmark-block/bookmark-block';
import RatingBlock from '../rating-block/rating-block';
import Features from '../features/features';

type AboutPlaceProps = {
  offer: Offer,
}

export default function AboutPlace({offer}: AboutPlaceProps): JSX.Element {
  return (
    <>
      {offer.isPremium && <PremiumBlock isPropertyDetail/>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
        <BookmarkBlock  isPropertyDetail isFavorite={offer.isFavorite} forOffer={offer.id}/>
      </div>
      <RatingBlock rating={offer.rating} isPropertyDetail/>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {offer.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <Features features={offer.goods}/>
    </>
  );
}
