import {connect, ConnectedProps} from 'react-redux';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {AppRoute, PagesApp} from '../../const';
import {isCheckedAuth} from '../../utils';
import Layout from '../../containers/layout/layout';
import Home from '../../views/home/home';
import LogIn from '../../views/log-in/log-in';
import Favorites from '../../views/favorites/favorites';
import Property from '../../views/property/property';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import {State} from '../../types/state';

const mapStateToProps = ({USER, MAIN}: State) => ({
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: MAIN.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

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
        >
        </PrivateRoute>

        <Route exact path={`${AppRoute.Room}:id`}>
          <Layout page={PagesApp.Property}>
            <Property/>
          </Layout>
        </Route>

        <Route
          render={() =>  (
            <Layout page={PagesApp.undefined}>
              <div className="container">
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Link to="/">Go to main page</Link>
              </div>
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
