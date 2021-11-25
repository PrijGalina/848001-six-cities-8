import {useSelector} from 'react-redux';
import Tabs from '../../components/tabs/tabs';
import cn from 'classnames';
import PlacesInCity from '../../components/places-in-city/places-in-city';
import NoPlacesToStay from '../../components/no-places-to-stay/no-places-to-stay';
import {getOffers} from '../../store/main/selectors';

export default function Home(): JSX.Element {
  const offers = useSelector(getOffers);
  const isEmpty: boolean = offers.length === 0;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
      <div className="cities">
        <div className={cn ('cities__places-container container', {'cities__places-container--empty': isEmpty})}>
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
