import { Fragment } from 'react';
import {Offer} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  isFavoritePage: boolean,
  hoverHandler: (offer?:Offer) => void,
};

export default function OffersList({offers, isFavoritePage, hoverHandler}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => {
        const key = offer.host.name;

        return(
          <Fragment key={key}>
            <OfferCard
              offer={offer}
              isFavoritePage={isFavoritePage}
              onStateChange={() => hoverHandler(offer)}
              onStateReset={() => hoverHandler()}
            />
          </Fragment>
        );
      })}
    </>
  );
}
