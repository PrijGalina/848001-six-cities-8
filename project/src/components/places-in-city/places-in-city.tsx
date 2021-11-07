import PlacesSorting from '../places-sorting/places-sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import {PagesApp, OFFER_IN_HOME} from '../../const';

type PlacesInCityProps = {
  offers: Offer[],
  offersCount: number,
  activeCity: string,
}

export default function PlacesInCity({offers, offersCount, activeCity}: PlacesInCityProps): JSX.Element {
  const [offer, setActiveOffer] =  useState<Offer>();
  const locations = offers.map(({location}) => location);
  const activePoint = offer?.location;

  const hoverHandler = (offerItem?: Offer) => {
    if(offer?.id !== offerItem?.id){
      setActiveOffer(offerItem);
    }
  };

  return(
    <>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{offersCount} places to stay in {activeCity}</b>
        <PlacesSorting/>
        <div className='cities__places-list places__list tabs__content'>
          <OffersList
            offers={offers}
            classes={OFFER_IN_HOME}
            page={PagesApp.Home}
            hoverHandler={hoverHandler}
          />
        </div>
      </section>
      <div className='cities__right-section'>
        <Map
          city={activeCity}
          locations={locations}
          height={752}
          width={512}
          hoverPoint={activePoint}
        />
      </div>
    </>
  );
}
