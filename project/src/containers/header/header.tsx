import Logo from '../../components/logo/logo';
import {PagesApp, LOGO_PROPERTY} from '../../const';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../store/api-actions';

type HeaderProps = {
  page: string,
}

export default function Header({page}: HeaderProps): JSX.Element {
  const isAuth = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo place={LOGO_PROPERTY.header}/>
          </div>
          {(page !== PagesApp.LogIn) &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {isAuth === AuthorizationStatus.Auth &&
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" href="#/">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>}
                </li>
                <li className="header__nav-item">
                  {isAuth === AuthorizationStatus.Auth ?
                    <Link to={AppRoute.Root} className="header__nav-link" href="#/" onClick={() => handleLogOut()}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                    :
                    <Link to={AppRoute.Login} className="header__nav-link" href="#/">
                      <span className="header__signin">Sign in</span>
                    </Link>}
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}
