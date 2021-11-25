import {useDispatch} from 'react-redux';
import {setOfferActive} from '../../store/action';
import {Offer, OfferClasses} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  classes: OfferClasses,
  page: string,
};

export default function OffersList({ offers, classes, page }: OffersListProps): JSX.Element {
  const dispatch = useDispatch();

  const onFocusOffer = (value?: Offer | undefined) => {
    dispatch(setOfferActive(value));
  };

  return (
    <>
      {offers.map((offer: Offer) => {
        const key = offer.id;

        return (
          <OfferCard
            key={key}
            offer={offer}
            classes={classes}
            page={page}
            handleStateSet={() => onFocusOffer(offer)}
            handleStateReset={() => onFocusOffer(undefined)}
          />
        );
      })}
    </>
  );
}
