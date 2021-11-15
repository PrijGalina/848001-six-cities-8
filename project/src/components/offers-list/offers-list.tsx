import {useSelector, useDispatch} from 'react-redux';
import {OfferInFocusAction} from '../../store/action';
import {Offer, OfferClasses} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';
import {getOffer} from '../../store/app-data/selectors';

type OffersListProps = {
  offers: Offer[],
  classes: OfferClasses,
  page: string,
};

export default function OffersList({ offers, classes, page }: OffersListProps): JSX.Element {
  const offerInFocus = useSelector(getOffer);

  const dispatch = useDispatch();

  const onFocusOffer = (value?: Offer) => {
    dispatch(OfferInFocusAction(offerInFocus));
  };

  return (
    <>
      {offers.map((offer: Offer) => {
        const key = offer.host.name;

        return (
          <OfferCard
            key={key}
            offer={offer}
            classes={classes}
            page={page}
            onStateChange={() => onFocusOffer(offer)}
            onStateReset={() => onFocusOffer()}
          />
        );
      })}
    </>
  );
}
