import OfferCard from '../../components/offer-card/offer-card';
import {useState} from 'react';
import {Offers, Offer} from '../../types/offers';

type OffersListProps = {
  offers: Offers,
  isFavoritePage: boolean,
};

type stateFunction = (id:number) => void;

function handleStateChange(id:number, setFunc: stateFunction): void {
  setFunc(id);
}

function handleStateReset(setFunc: stateFunction): void {
  setFunc(0);
}

function OffersList({offers, isFavoritePage}:OffersListProps): JSX.Element {
  const customActiveOffer = 0;
  const [activeOffer, setActiveOffer] = useState(customActiveOffer);

  return (
    <>
      <span className="visually-hidden">{activeOffer}</span>
      {offers.map((offer: Offer) => {
        const keyValue = `${offer.id}-${offer.host.name}`;

        return (
          <OfferCard key={keyValue} offer={offer} isFavoritePage={isFavoritePage} onStateChange={() => handleStateChange(offer.id, setActiveOffer)} onStateReset={() => handleStateReset(setActiveOffer)}/>
        );
      })}
    </>
  );
}

export default OffersList;
