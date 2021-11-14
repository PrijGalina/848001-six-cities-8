import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import PlacesSorting from '../places-sorting/places-sorting';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {PagesApp, OFFER_IN_HOME, MAP_PROPERTY} from '../../const';

const mapStateToProps = ({DATA}: State) => ({
  offers: DATA.offers,
  city: DATA.city,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlacesInCity({offers, city}: PropsFromRedux): JSX.Element {

  return (
    <>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{offers.length} places to stay in {city}</b>
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
          height={MAP_PROPERTY.homeMapSize.height}
          width={MAP_PROPERTY.homeMapSize.width}
        />
      </div>
    </>
  );
}

export {PlacesInCity};
export default connector(PlacesInCity);
