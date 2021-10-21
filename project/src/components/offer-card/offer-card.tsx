import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Offers, Offer} from '../../types/offers';

type OffersCardProps = {
  offers: Offers,
};

function OfferCard({offers}: OffersCardProps): JSX.Element {
  const customActiveOffer = 0;
  const [activeOffer, setActiveOffer] = useState(0);

  return (
    <>
      <span className="visually-hidden">{activeOffer}</span>
      {offers.map((offer: Offer, id: number) => {
        const keyValue = `${id}-${offer.host.name}`;
        const bookmarkClass = offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button';
        const pathToOffer = `/offer/:${offer.id}`;

        return (
          <article key={keyValue} className="cities__place-card place-card" onMouseEnter={() => setActiveOffer(offer.id)} onMouseLeave={() => setActiveOffer(customActiveOffer)}>
            {offer.isPremium ?
              <div className="place-card__mark">
                <span>Premium</span>
              </div> : ''}
            <div className="cities__image-wrapper place-card__image-wrapper">
              <Link to={pathToOffer}>
                <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{offer.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className={bookmarkClass} type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={pathToOffer}>{offer.title}</Link>
              </h2>
              <p className="place-card__type">{offer.type}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default OfferCard;
