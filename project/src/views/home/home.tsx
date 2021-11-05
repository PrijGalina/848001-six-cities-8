import React from 'react';
import {Offer} from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import classnames from 'classnames';
import PlacesInCity from '../../components/places-in-city/places-in-city';
import NoPlacesToStay from '../../components/no-places-to-stay/no-places-to-stay';

type HomeProps = {
  offers: Offer[],
  onStateChange: React.Dispatch<React.SetStateAction<string>>,
  activeCity: string,
}

export default function Home({offers, onStateChange, activeCity}: HomeProps): JSX.Element {
  const offersFiltred = offers.filter(({city}) => (city.name === activeCity));

  const citiesCount = offers.reduce((previousValue: {[key: string]: number}, currentValue) => {
    const {name} = currentValue.city;
    previousValue[name] = (previousValue[name] || 0) + 1;

    return previousValue;
  },{});

  const isEmpty:boolean = (citiesCount[activeCity] === undefined);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <Tabs activeCity={activeCity} onStateChange={onStateChange}/>
      <div className="cities">
        <div className={classnames('cities__places-container container', {'cities__places-container--empty': isEmpty})}>
          {
            isEmpty
              ?
              <NoPlacesToStay activeCity={activeCity}/>
              :
              <PlacesInCity offers={offersFiltred} offersCount={citiesCount[activeCity]} activeCity={activeCity}/>
          }
        </div>
      </div>
    </>
  );
}
