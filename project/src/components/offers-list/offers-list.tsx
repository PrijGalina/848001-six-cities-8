import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {OfferInFocusAction} from '../../store/action';
import {State} from '../../types/state';
import {Offer, OfferClasses} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  classes: OfferClasses,
  page: string,
};

const mapStateToProps = ({DATA}: State) => ({
  offerInFocus: DATA.offerInFocus,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onFocusOffer(value?: Offer | undefined) {
    dispatch(OfferInFocusAction(value));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & OffersListProps;

function OffersList({ offers, classes, page, offerInFocus, onFocusOffer}: ConnectedComponentProps): JSX.Element {
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

export {OffersList};
export default connector(OffersList);
