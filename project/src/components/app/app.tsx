import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus, PagesApp} from '../../const';
import {isCheckedAuth} from '../../utils';
import Layout from '../../containers/layout/layout';
import Home from '../../views/home/home';
import LogIn from '../../views/log-in/log-in';
import Favorites from '../../views/favorites/favorites';
import Property from '../../views/property/property';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import {getDataLoad} from '../../store/app-data/selectors';
import {getAuthorization} from '../../store/user-process/selectors';

export default function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorization);
  const isDataLoaded = useSelector(getDataLoad);


  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Layout page={PagesApp.Home} isHome isGrey>
            <Home/>
          </Layout>
        </Route>

        <Route exact path={AppRoute.Login}>
          <Layout page={PagesApp.LogIn} isLogIn isGrey>
            <LogIn />
          </Layout>
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() =>  (
            <Layout page={PagesApp.Favorites}>
              <Favorites/>
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
          render={() =>  (
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
