import OfferCard from '../../components/offer-card/offer-card';
import {useState} from 'react';
import {Offers, Offer} from '../../types/offers';

type OffersListProps = {
  offers: Offers,
  isFavoritePage: boolean,
};

type NullNum = number | undefined | null;

function OffersList({offers, isFavoritePage}:OffersListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<NullNum>(null);

  return (
    <>
      <span className="visually-hidden">{activeOffer}</span>
      {offers.map((offer: Offer) => {
        const keyValue = `${offer.id}-${offer.host.name}`;

        return (
          <OfferCard key={keyValue} offer={offer} isFavoritePage={isFavoritePage} onStateChange={() => setActiveOffer(offer.id)} onStateReset={() => setActiveOffer(null)}/>
        );
      })}
    </>
  );
}

export default OffersList;
