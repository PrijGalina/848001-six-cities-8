import {Offer, OfferClasses} from '../../types/offer';
import OfferImageWrapper from '../offer-image-wrapper/offer-image-wrapper';
import OfferInfoWrapper from '../offer-info-wrapper/offer-info-wrapper';
import PremiumBlock from '../premium-block/premium-block';
import {PagesApp, FAVORITE_ICON, FAVORITE_PAGE_ICON} from '../../const';
import cn from 'classnames';

type OfferCardProps = {
  offer: Offer,
  classes: OfferClasses,
  page: string,
  onStateChange?: () => void,
  onStateReset?: () => void,
};

export default function OfferCard({offer, classes, page, onStateChange, onStateReset}: OfferCardProps): JSX.Element {
  const {isPremium} = offer;
  const pathToOffer = `/offer/:${offer.id}`;

  return (
    <article className={cn ('place-card',classes.article)} onMouseEnter={onStateChange} onMouseLeave={onStateReset}>
      {isPremium && <PremiumBlock/>}
      <OfferImageWrapper
        imageClass={classes.image}
        pathToOffer={pathToOffer}
        width={page === PagesApp.Favorites ? FAVORITE_PAGE_ICON.width : FAVORITE_ICON.width}
        height={page === PagesApp.Favorites ? FAVORITE_PAGE_ICON.height : FAVORITE_ICON.height}
        id={offer.id}
      />
      <OfferInfoWrapper
        infoClass={classes.info}
        pathToOffer={pathToOffer}
        id={offer.id}
      />
    </article>
  );
}
