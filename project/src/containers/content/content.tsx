import {PropsWithChildren} from 'react';
import {PagesClass} from '../../const';

type ContentProps = {
  page: string,
}

export default function Content({children, page} : PropsWithChildren<ContentProps>): JSX.Element {
  return (
    <main className={`page__main ${PagesClass.get(page)}`}>
      {children}
    </main>
  );
}
