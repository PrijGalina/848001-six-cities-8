import {useState} from 'react';
import {useLocation} from 'react-router';
import {CITIES, PagesApp, OFFER_IN_PROPERTY, MAP_PROPERTY} from '../../const';
import {reviews} from '../../mocks/reviews';
import {offers, offersInParis} from '../../mocks/offers';
import {ReviewType} from '../../types/review';
import {Offer} from '../../types/offer';
import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components//reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ImagesOfPlace from '../../components/images-of-place/images-of-place';
import AboutHost from '../../components/about-host/about-host';
import AboutPlace from '../../components/about-place/about-place';

export default function Property(): JSX.Element {
  const [activeOffer, setActiveOffer] =  useState<Offer>();
  const activePoint = activeOffer?.location;
  const reviewList: ReviewType[] = reviews;
  const locations = offersInParis.map(({location}) => location);
  const offerId = useLocation().pathname.split(':')[1];
  const offer: Offer = offers.filter((element: Offer) => element.id === +offerId)[0];

  const hoverHandler = (offerItem?: Offer) => {
    if(activeOffer?.id !== offerItem?.id){
      setActiveOffer(offerItem);
    }
  };

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
            city={CITIES[0]}
            locations={locations}
            height={MAP_PROPERTY.propertyMapSize.height}
            width={MAP_PROPERTY.propertyMapSize.width}
            hoverPoint={activePoint}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList
              offers={offersInParis}
              classes={OFFER_IN_PROPERTY}
              page={PagesApp.Property}
              hoverHandler={hoverHandler}
            />
          </div>
        </section>
      </div>
    </>
  );
}
