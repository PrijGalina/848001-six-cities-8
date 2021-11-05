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
import {getRatingStyle} from '../../utils';

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

  const isPremium = currentOffer && currentOffer.isPremium && (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  const isBookmarkClass = currentOffer && currentOffer.isFavorite && ('property__bookmark-button--active');

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Studio"/>
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer?.title}
              </h1>
              <button className={`property__bookmark-button button ${isBookmarkClass}`} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{currentOffer && currentOffer.isFavorite ? 'In' : 'To'}  bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${currentOffer && getRatingStyle(currentOffer.rating)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{currentOffer && currentOffer.rating}</span>
            </div>
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
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                  Wi-Fi
                </li>
                <li className="property__inside-item">
                  Washing machine
                </li>
                <li className="property__inside-item">
                  Towels
                </li>
                <li className="property__inside-item">
                  Heating
                </li>
                <li className="property__inside-item">
                  Coffee machine
                </li>
                <li className="property__inside-item">
                  Baby seat
                </li>
                <li className="property__inside-item">
                  Kitchen
                </li>
                <li className="property__inside-item">
                  Dishwasher
                </li>
                <li className="property__inside-item">
                  Cabel TV
                </li>
                <li className="property__inside-item">
                  Fridge
                </li>
              </ul>
            </div>
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
              isFavoritePage={false}
              hoverHandler={hoverHandler}
            />
          </div>
        </section>
      </div>
    </>
  );
}
