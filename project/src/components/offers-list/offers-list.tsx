import OfferCard from '../../components/offer-card/offer-card';
import {Offers} from '../../types/offers';

type OffersListProps = {
  offers: Offers,
};

function offersList({offers}:OffersListProps): JSX.Element {
  return(
    <OfferCard offers={offers}/>
  );
}

export default offersList;
