import {useSelector} from 'react-redux';
import PlacesSorting from '../places-sorting/places-sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {PagesApp, OFFER_IN_HOME, MAP_PROPERTY} from '../../const';
import {getCity, getOffers} from '../../store/main/selectors';
import {getFiltredOffers} from '../../utils';

export default function PlacesInCity(): JSX.Element {
  const allOffers = useSelector(getOffers);
  const city = useSelector(getCity);
  const offers = getFiltredOffers(allOffers, city.title);

  return (
    <>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{offers.length} places to stay in {city.title}</b>
        <PlacesSorting/>
        <div className='cities__places-list places__list tabs__content'>
          <OffersList
            offers={offers}
            classes={OFFER_IN_HOME}
            page={PagesApp.Home}
          />
        </div>
      </section>
      <div className='cities__right-section'>
        <Map
          offers = {offers}
          height={MAP_PROPERTY.homeMapSize.height}
          width={MAP_PROPERTY.homeMapSize.width}
          zoom = {MAP_PROPERTY.zoomCity}
          lat = {city.lat}
          lng = {city.lng}
        />
      </div>
    </>
  );
}
