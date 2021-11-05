import {Offer} from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import {useState} from 'react';

type FavoritesProps = {
  offers: Offer[],
}

export default function Favorites({offers}: FavoritesProps): JSX.Element {
  const offersFiltred = offers.filter(({isFavorite}) => isFavorite);
  const [activeOffer, setActiveOffer] =  useState<Offer>();
  const hoverHandler = (offer?: Offer) => {
    if(activeOffer !== offer){
      setActiveOffer(offer);
    }
  };

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#/">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <OffersList
                offers={offersFiltred}
                isFavoritePage
                hoverHandler={hoverHandler}
              />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
