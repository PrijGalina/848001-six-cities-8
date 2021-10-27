import OfferCard from '../../components/offer-card/offer-card';
import {Offers, Offer} from '../../types/offers';

type OffersListProps = {
  offers: Offers,
  isFavoritePage: boolean,
  hoverHandler: (id: number | null) => void,
};

function OffersList({offers, isFavoritePage, hoverHandler}:OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => {
        const keyValue = `${offer.id}-${offer.host.name}`;

        return (
          <OfferCard key={keyValue} offer={offer} isFavoritePage={isFavoritePage} onStateChange={() => hoverHandler(offer.id)} onStateReset={() => hoverHandler(null)}/>
        );
      })}
    </>
  );
}

export default OffersList;
