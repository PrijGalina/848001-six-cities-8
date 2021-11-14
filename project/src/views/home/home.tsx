import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import Tabs from '../../components/tabs/tabs';
import classnames from 'classnames';
import PlacesInCity from '../../components/places-in-city/places-in-city';
import NoPlacesToStay from '../../components/no-places-to-stay/no-places-to-stay';

const mapStateToProps = ({DATA}: State) => ({
  offers: DATA.offers,
  city: DATA.city,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Home({offers, city}: PropsFromRedux): JSX.Element {
  const isEmpty: boolean = offers.length === 0;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
      <div className="cities">
        <div className={classnames ('cities__places-container container', {'cities__places-container--empty': isEmpty})}>
          {
            isEmpty ?
              <NoPlacesToStay /> :
              <PlacesInCity />
          }
        </div>
      </div>
    </>
  );
}

export {Home};
export default connector(Home);
