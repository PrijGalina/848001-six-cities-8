import {useSelector} from 'react-redux';
import {getCity} from '../../store/app-data/selectors';

export default function NoPlacesToStay(): JSX.Element {
  const city = useSelector(getCity);

  document.querySelector('.page--main')?.classList.add('page__main--index-empty');

  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
}
