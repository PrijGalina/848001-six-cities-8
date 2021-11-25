import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {getAuthorization} from '../../store/user/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const isAuth = useSelector(getAuthorization);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuth === AuthorizationStatus.Auth ?
          render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}
