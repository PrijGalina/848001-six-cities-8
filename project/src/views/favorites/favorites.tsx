import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/main/selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesByCity from '../../components/favorites-by-city/favorites-by-city';
import {Offer} from '../../types/offer';
import {CITIES} from '../../const';

export default function Favorites(): JSX.Element {
  const dispatch = useDispatch();

  const offers: Offer[] = useSelector(getFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  },[dispatch]);

  const favoritesInCities = offers.reduce((previousValue: {[key: string]: Offer[] | []}, currentValue) => {
    const {name} = currentValue.city;
    const isFavorite = currentValue.isFavorite;
    const result: Offer[] = previousValue[name] || [];
    isFavorite && result.push(currentValue);
    previousValue[name] = result;

    return previousValue;
  },{});

  if (offers.length === 0) {
    return (
      <FavoritesEmpty />
    );
  }


  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {CITIES.map((city) =>
            (favoritesInCities[city] && favoritesInCities[city].length !== 0)
            &&
            (
              <FavoritesByCity
                key={city}
                city={city}
                offers={favoritesInCities[city]}
              />
            ))}
        </ul>
      </section>
    </div>
  );
}
