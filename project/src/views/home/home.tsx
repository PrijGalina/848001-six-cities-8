import Logo from '../../components/logo/logo';
import OffersList from '../../components/offers-list/offers-list';
import {Offer} from '../../types/offers';
import Map from '../../components/map/map';
import MenuItem from '../../components/menu-item/menu-item';
import {useState} from 'react';
import {CITIES} from '../../const';

type HomeProps = {
  offers: Offer[],
  onStateChange: React.Dispatch<React.SetStateAction<string>>,
  activeCity: string,
}

function Home({offers, onStateChange, activeCity}: HomeProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer>();
  const offersFiltred = offers.filter(({city}) => (city.name === activeCity));
  const locations = offersFiltred.map(({location}) => location);
  const hoverHandler = (offer?: Offer) => setActiveOffer(offer);
  const activePoint = (activeOffer) && activeOffer.location;

  const citiesCount = offers.reduce((previousValue, currentValue) => {
    const {name} = currentValue.city;
    previousValue[name] = (previousValue[name] || 0) + 1;

    return previousValue;
  },{} as { [key: string]: number });

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#/">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                CITIES.map((city: string) => {
                  const isActive = (city === activeCity);
                  return(
                    <MenuItem key={city} isActive={isActive} city={city} onStateChange={onStateChange}/>
                  );
                })
              }
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{citiesCount[activeCity] ? citiesCount[activeCity] : 0 } places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offersFiltred} isFavoritePage={false} hoverHandler={hoverHandler}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={activeCity} locations={locations} hoverPoint={activePoint}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
