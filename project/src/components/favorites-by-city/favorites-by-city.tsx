import OffersList from '../../components/offers-list/offers-list';
import {PagesApp, OFFER_IN_FAVORITES} from '../../const';
import {Offer} from '../../types/offer';

type FavoritesByCityProps = {
  offers: Offer[],
  city: string,
}

export default function FavoritesByCity({offers, city}: FavoritesByCityProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <OffersList
          offers={offers}
          classes={OFFER_IN_FAVORITES}
          page={PagesApp.Favorites}
        />
      </div>
    </li>
  );
}
