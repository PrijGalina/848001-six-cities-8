import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {History} from 'history';
import {getAuthorizationStatus} from '../../store/user/selectors';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render(routeProps)
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}
