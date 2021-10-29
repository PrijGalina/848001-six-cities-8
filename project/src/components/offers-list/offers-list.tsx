import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offers';

type OffersListProps = {
  offers: Offer[],
  isFavoritePage: boolean,
  hoverHandler?: (offer?: Offer | null) => void,
};

function OffersList({offers, isFavoritePage, hoverHandler}:OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: Offer) => {
        const keyValue = `${offer.id}-${offer.host.name}`;

        return (
          hoverHandler !== undefined ?
            <OfferCard key={keyValue} offer={offer} isFavoritePage={isFavoritePage} onStateChange={() => hoverHandler(offer)} onStateReset={() => hoverHandler(null)}/> :
            <OfferCard key={keyValue} offer={offer} isFavoritePage={isFavoritePage}/>
        );
      })}
    </>
  );
}

export default OffersList;
