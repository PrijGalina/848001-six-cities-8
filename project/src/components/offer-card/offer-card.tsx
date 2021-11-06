import {Offer, OfferClasses} from '../../types/offer';
import OfferImageWrapper from '../offer-image-wrapper/offer-image-wrapper';
import OfferInfoWrapper from '../offer-info-wrapper/offer-info-wrapper';
import PremiumBlock from '../premium-block/premium-block';
import {PagesApp} from '../../const';

type OfferCardProps = {
  offer: Offer,
  classes: OfferClasses,
  page: string,
  onStateChange?: () => void,
  onStateReset?: () => void,
};

export default function OfferCard({offer, classes, page, onStateChange, onStateReset}: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, title, type, rating, isFavorite} = offer;
  const pathToOffer = `/offer/:${offer.id}`;

  return (
    <article className={`${classes.article} place-card`} onMouseEnter={onStateChange} onMouseLeave={onStateReset}>
      {isPremium && <PremiumBlock/>}
      <OfferImageWrapper
        imageClass={classes.image}
        pathToOffer={pathToOffer}
        previewImage={previewImage}
        width={page === PagesApp.Favorites ? '150' : '260'}
        height={page === PagesApp.Favorites ? '110' : '200'}
      />
      <OfferInfoWrapper
        infoClass={classes.info}
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
