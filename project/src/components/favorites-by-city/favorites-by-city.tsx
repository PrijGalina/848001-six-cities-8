import OffersList from '../../components/offers-list/offers-list';
import {Offer} from '../../types/offer';
import {PagesApp, OFFER_IN_FAVORITES} from '../../const';

type FavoritesByCityProps = {
  city: string,
  offers: Offer[],
  hoverHandler: (offer?:Offer) => void,
};

export default function FavoritesByCity({city, offers, hoverHandler}: FavoritesByCityProps): JSX.Element {
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
          hoverHandler={hoverHandler}
        />
      </div>
    </li>
  );
}
