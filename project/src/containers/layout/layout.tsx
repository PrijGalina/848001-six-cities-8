import {PropsWithChildren} from 'react';
import classnames from 'classnames';
import Header from '../header/header';
import Content from '../content/content';
import Footer from '../footer/footer';
import {PagesApp} from '../../const';

type LayoutProps = {
  page: string,
  isHome?: boolean,
  isLogIn?: boolean,
  isGrey?: boolean,
}

export default function Layout({children, page, isHome, isLogIn, isGrey} : PropsWithChildren<LayoutProps>): JSX.Element {
  return (
    <div className={classnames('page', {'page--main': isHome}, {'page--login': isLogIn}, {'page--gray': isGrey})} >
      <Header page={page}/>
      <Content page={page}>{children}</Content>
      {page === PagesApp.Favorites && <Footer/>}
    </div>
  );
}

