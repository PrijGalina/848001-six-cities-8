import {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Home from '../../views/home/home';
import LogIn from '../../views/log-in/log-in';
import Favorites from '../../views/favorites/favorites';
import Property from '../../views/property/property';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import {CITIES} from '../../const';

type AppProps = {
  offers: Offer[],
};

function App({offers}: AppProps): JSX.Element {
  const [activeCity, setActiveCity] = useState<string>(CITIES[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Home
            offers={offers}
            onStateChange={setActiveCity}
            activeCity={activeCity}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LogIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property/>
        </Route>
        <Route
          render={(props) =>  (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
