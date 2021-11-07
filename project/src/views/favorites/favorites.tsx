import {Offer} from '../../types/offer';
import FavoritesByCity from '../../components/favorites-by-city/favorites-by-city';
import {useState} from 'react';
import {CITIES} from '../../const';

type FavoritesProps = {
  offers: Offer[],
}

export default function Favorites({offers}: FavoritesProps): JSX.Element {
  const [activeOffer, setActiveOffer] =  useState<Offer>();

  const hoverHandler = (offer?: Offer) => {
    if(activeOffer?.id !== offer?.id){
      setActiveOffer(offer);
    }
  };

  const favoritesInCities = offers.reduce((previousValue: {[key: string]: Offer[] | []}, currentValue) => {
    const {name} = currentValue.city;
    const isFavorite = currentValue.isFavorite;
    const result:Offer[] = previousValue[name] || [];
    isFavorite && result.push(currentValue);
    previousValue[name] = result;

    return previousValue;
  },{});

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {CITIES.map((city) =>
            (favoritesInCities[city] && favoritesInCities[city].length !== 0) && (<FavoritesByCity key={city} city={city} offers={favoritesInCities[city]} hoverHandler={() => hoverHandler}/>))}
        </ul>
      </section>
    </div>
  );
}
