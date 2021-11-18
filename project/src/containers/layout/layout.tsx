import {PropsWithChildren} from 'react';
import cn from 'classnames';
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

export default function Layout({children, page, isHome, isLogIn, isGrey}: PropsWithChildren<LayoutProps>): JSX.Element {
  const divClasses = cn (
    'page',
    {
      'page--main': isHome,
      'page--login': isLogIn,
      'page--gray': isGrey,
    },
  );

  return (
    <div className={divClasses}>
      <Header page={page}/>
      <Content page={page}>{children}</Content>
      {page === PagesApp.Favorites && <Footer/>}
    </div>
  );
}

