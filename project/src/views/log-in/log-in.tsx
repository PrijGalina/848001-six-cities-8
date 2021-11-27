import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRef, FormEvent} from 'react';
import {getCity} from '../../store/main/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {loginAction} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';

export default function LogIn(): JSX.Element {
  const city = useSelector(getCity);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  const dispatch = useDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Root));
    }
  }, [authorizationStatus, dispatch]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="" onSubmit={handleSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              className="login__input form__input"
              type="email"
              name="email"
              placeholder="Email"
              ref={loginRef}
              required
            />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              className="login__input form__input"
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#/">
            <span>{city.title}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
