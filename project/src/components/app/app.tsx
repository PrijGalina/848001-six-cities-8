import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Layout from '../../containers/layout/layout';
import Home from '../../views/home/home';
import LogIn from '../../views/log-in/log-in';
import Favorites from '../../views/favorites/favorites';
import Property from '../../views/property/property';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import {CITIES, PagesApp} from '../../const';

type AppProps = {
  offers: Offer[],
};

function App({offers}: AppProps): JSX.Element {
  const [activeCity, setActiveCity] = useState<string>(CITIES[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Layout page={PagesApp.Home} isHome isGrey>
            <Home
              offers={offers}
              onStateChange={setActiveCity}
              activeCity={activeCity}
            />
          </Layout>
        </Route>

        <Route exact path={AppRoute.Login}>
          <Layout page={PagesApp.LogIn} isLogIn isGrey>
            <LogIn/>
          </Layout>
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() =>  (
            <Layout page={PagesApp.Favorites}>
              <Favorites offers={offers}/>
            </Layout>
          )}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.Room}>
          <Layout page={PagesApp.Property}>
            <Property/>
          </Layout>
        </Route>

        <Route
          render={(props) =>  (
            <Layout page={PagesApp.undefined}>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
