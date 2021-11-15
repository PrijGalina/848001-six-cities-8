import {useSelector} from 'react-redux';
import {useLocation} from 'react-router';
import {PagesApp, OFFER_IN_PROPERTY, MAP_PROPERTY} from '../../const';
import {reviews} from '../../mocks/reviews';
import {ReviewType} from '../../types/review';
import {Offer} from '../../types/offer';
import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components//reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ImagesOfPlace from '../../components/images-of-place/images-of-place';
import AboutHost from '../../components/about-host/about-host';
import AboutPlace from '../../components/about-place/about-place';
import {getCity, getOffers} from '../../store/app-data/selectors';

export default function Property(): JSX.Element {
  const city = useSelector(getCity);
  const offers = useSelector(getOffers);
  const reviewList: ReviewType[] = reviews;
  const offerId = useLocation().pathname.split(':')[1];
  offers.filter((element: Offer) => (element.id === +offerId) && element.city.name === city);
  const offer = offers[0];

  return (
    <>
      <section className="property">
        <ImagesOfPlace images={offer.images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            <AboutPlace offer={offer}/>
            <AboutHost offer={offer}/>
            <section className="property__reviews reviews">
              <ReviewsList reviews={reviewList}/>
              <NewCommentForm/>
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
            <OffersList
              offers={offers}
              classes={OFFER_IN_PROPERTY}
              page={PagesApp.Property}
            />
          </div>
        </section>
      </div>
    </>
  );
}
