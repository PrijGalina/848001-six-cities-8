import {Offer, OfferClasses} from '../../types/offer';
import OfferImageWrapper from '../offer-image-wrapper/offer-image-wrapper';
import OfferInfoWrapper from '../offer-info-wrapper/offer-info-wrapper';
import PremiumBlock from '../premium-block/premium-block';
import {PagesApp, FAVORITE_ICON, FAVORITE_PAGE_ICON, AppRoute} from '../../const';
import cn from 'classnames';

type OfferCardProps = {
  offer: Offer,
  classes: OfferClasses,
  page: string,
  handleStateSet?: () => void,
  handleStateReset?: () => void,
};

export default function OfferCard({offer, classes, page, handleStateSet, handleStateReset}: OfferCardProps): JSX.Element {
  const {isPremium} = offer;
  const pathToOffer = `${AppRoute.Room}${offer.id}`;

  return (
    <article className={cn ('place-card',classes.article)} onMouseEnter={handleStateSet} onMouseLeave={handleStateReset}>
      {isPremium && <PremiumBlock/>}
      <OfferImageWrapper
        imageClass={classes.image}
        pathToOffer={pathToOffer}
        width={page === PagesApp.Favorites ? FAVORITE_PAGE_ICON.width : FAVORITE_ICON.width}
        height={page === PagesApp.Favorites ? FAVORITE_PAGE_ICON.height : FAVORITE_ICON.height}
        offer={offer}
      />
      <OfferInfoWrapper
        infoClass={classes.info}
        pathToOffer={pathToOffer}
        offer={offer}
      />
    </article>
  );
}
