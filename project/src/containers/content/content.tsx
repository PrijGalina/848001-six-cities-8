import {PropsWithChildren} from 'react';
import {PagesClass} from '../../const';
import classnames from 'classnames';

type ContentProps = {
  page: string,
}

export default function Content({children, page}: PropsWithChildren<ContentProps>): JSX.Element {
  return (
    <main className={classnames ('page__main', PagesClass.get(page))}>
      {children}
    </main>
  );
}
