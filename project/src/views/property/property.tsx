import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components//reviews-list/reviews-list';
import {reviews} from '../../mocks/reviews';
import {Review} from '../../types/review';
import Map from '../../components/map/map';
import {CITIES} from '../../const';
import {offersInParis} from '../../mocks/offers';
import OffersList from '../../components/offers-list/offers-list';
import {useState} from 'react';
import {Offer} from '../../types/offer';
import {useLocation} from 'react-router';
import {offers} from '../../mocks/offers';
import RatingBlock from '../../components/rating-block/rating-block';
import BookmarkBlock from '../../components/bookmark-block/bookmark-block';
import PremiumBlock from '../../components/premium-block/premium-block';
import Features from '../../components/features/features';
import ImagesOfPlace from '../../components/images-of-place/images-of-place';
import {PagesApp, OFFER_IN_PROPERTY} from '../../const';

export default function Property(): JSX.Element {
  const reviewList:Review[] = reviews;
  const locations = offersInParis.map(({location}) => location);
  const [activeOffer, setActiveOffer] =  useState<Offer>();
  const activePoint = activeOffer?.location;
  const offerId = useLocation().pathname.split(':')[1];
  const currentOffer = offers.find((element: Offer) => element.id === +offerId);

  const hoverHandler = (offer?: Offer) => {
    if(activeOffer !== offer){
      setActiveOffer(offer);
    }
  };

  return (
    <>
      <section className="property">
        <ImagesOfPlace images={currentOffer && currentOffer.images}/>
        <div className="property__container container">
          <div className="property__wrapper">
            {currentOffer && currentOffer.isPremium && <PremiumBlock/>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer?.title}
              </h1>
              <BookmarkBlock  isPropertyDetail isFavorite={currentOffer ? currentOffer.isFavorite : false}/>
            </div>
            <RatingBlock rating={currentOffer ? currentOffer.rating : 0} isPropertyDetail/>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {currentOffer && currentOffer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {currentOffer && currentOffer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {currentOffer && currentOffer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{currentOffer && currentOffer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <Features features={currentOffer && currentOffer.goods}/>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={currentOffer && currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {currentOffer && currentOffer.host.name}
                </span>
                <span className="property__user-status">
                  {currentOffer && currentOffer.host.isPro && 'Pro'}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {currentOffer && currentOffer.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList reviews={reviewList}/>
              <NewCommentForm />
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map
            city={CITIES[0]}
            locations={locations}
            height={579}
            width={1144}
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
