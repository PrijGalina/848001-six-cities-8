import {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Home from '../../views/home/home';
import LogIn from '../../views/log-in/log-in';
import Favorites from '../../views/favorites/favorites';
import Property from '../../views/property/property';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  offersCount: number,
};

function App({offersCount}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Home offersCount={offersCount} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LogIn/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
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
