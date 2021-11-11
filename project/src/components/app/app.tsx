import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useState} from 'react';
import {AppRoute, AuthorizationStatus, CITIES, PagesApp} from '../../const';
import {isCheckedAuth} from '../../utils';
import Layout from '../../containers/layout/layout';
import Home from '../../views/home/home';
import LogIn from '../../views/log-in/log-in';
import Favorites from '../../views/favorites/favorites';
import Property from '../../views/property/property';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';
import {offers} from '../../mocks/offers';

const mapStateToProps = ({USER, DATA}: State) => ({
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: DATA.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const [activeCity, setActiveCity] = useState<string>(CITIES[0]);
  const offerList: Offer[] = offers;
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Layout page={PagesApp.Home} isHome isGrey>
            <Home
              offers={offerList}
              onStateChange={setActiveCity}
              activeCity={activeCity}
            />
          </Layout>
        </Route>

        <Route exact path={AppRoute.Login}>
          <Layout page={PagesApp.LogIn} isLogIn isGrey>
            <LogIn activeCity={activeCity}/>
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

export {App};
export default connector(App);

