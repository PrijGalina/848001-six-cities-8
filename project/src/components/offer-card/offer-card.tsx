import {Offer} from '../../types/offer';
import OfferImageWrapper from '../offer-image-wrapper/offer-image-wrapper';
import OfferInfoWrapper from '../offer-info-wrapper/offer-info-wrapper';
import classnames from 'classnames';

type OfferCardProps = {
  offer: Offer,
  isFavoritePage: boolean,
  onStateChange?: () => void,
  onStateReset?: () => void,
};

export default function OfferCard({offer, isFavoritePage, onStateChange, onStateReset}: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, rating, isFavorite} = offer;
  const pathToOffer = `/offer/:${offer.id}`;
  const isPremiumBlock = isFavoritePage && isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  return (
    <article className={classnames('place-card', isFavoritePage ? 'favorites__card' : 'cities__place-card')} onMouseEnter={onStateChange} onMouseLeave={onStateReset}>
      {isPremiumBlock}
      <OfferImageWrapper
        className={isFavoritePage ? 'favorites' : 'cities'}
        pathToOffer={pathToOffer}
        previewImage={previewImage}
        width={isFavoritePage ? '150' : '260'}
        height={isFavoritePage ? '110' : '200'}
      />
      <OfferInfoWrapper
        isFavoritesPage={isFavoritePage}
        pathToOffer={pathToOffer}
        isFavorite={isFavorite}
        rating={rating}
        price={price}
        title={title}
        type={type}
      />
    </article>
  );
}
