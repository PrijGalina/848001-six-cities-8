import {useDispatch} from 'react-redux';
//import {fetchOfferNearbyAction} from '../../store/api-actions';
import {fetchOfferInfoAction} from '../../store/api-actions';
import {useSelector} from 'react-redux';
import {getOfferIdActive, getOfferInfo} from '../../store/app-data/selectors';
import ImagesOfPlace from '../../components/images-of-place/images-of-place';
import AboutPlace from '../../components/about-place/about-place';
import AboutHost from '../../components/about-host/about-host';
//import ReviewsList from '../../components//reviews-list/reviews-list';
//import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import Map from '../../components/map/map';
//import {PagesApp, OFFER_IN_PROPERTY, MAP_PROPERTY} from '../../const';
import {MAP_PROPERTY} from '../../const';
//import {reviews} from '../../mocks/reviews';
//import {ReviewType} from '../../types/review';
//import OffersList from '../../components/offers-list/offers-list';

export default function Property(): JSX.Element {
  //const reviewList: ReviewType[] = reviews;

  const dispatch = useDispatch();
  const offerId = useSelector(getOfferIdActive);

  if (offerId !== undefined){
    dispatch(fetchOfferInfoAction(offerId));
  }

  const offer = useSelector(getOfferInfo);

  return (
    <div>{offerId}
      {offer &&
        <>
          <section className="property">
            <ImagesOfPlace images={offer.images} />
            <div className="property__container container">
              <div className="property__wrapper">
                <AboutPlace offer={offer} />
                <AboutHost offer={offer} />
                <section className="property__reviews reviews">

                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                height={MAP_PROPERTY.propertyMapSize.height}
                width={MAP_PROPERTY.propertyMapSize.width}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
              </div>
            </section>
          </div>
        </>}
    </div>
  );
}

/*
                  <ReviewsList reviews={reviewList} />
                  <NewCommentForm />
*/

/*
                <OffersList
                  offers={offers}
                  classes={OFFER_IN_PROPERTY}
                  page={PagesApp.Property}
                />
*/
