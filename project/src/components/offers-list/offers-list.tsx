import {Fragment} from 'react';
import {Offer, OfferClasses} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  classes: OfferClasses,
  page: string,
  hoverHandler: (offer?:Offer) => void,
};

export default function OffersList({offers, classes, page, hoverHandler}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => {
        const key = offer.host.name;

        return(
          <Fragment key={key}>
            <OfferCard
              offer={offer}
              classes={classes}
              page={page}
              onStateChange={() => hoverHandler(offer)}
              onStateReset={() => hoverHandler()}
            />
          </Fragment>
        );
      })}
    </>
  );
}
