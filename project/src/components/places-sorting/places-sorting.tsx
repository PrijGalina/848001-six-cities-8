import {useSelector, useDispatch} from 'react-redux';
import {offersSortAction} from '../../store/action';
import {SortValue} from '../../const';
import cn from 'classnames';
import {useState} from 'react';
import {getSort} from '../../store/app-data/selectors';

export default function PlacesSorting(): JSX.Element {
  const [status, setStatus] = useState<boolean>(false);
  const offersSort = useSelector(getSort);
  const dispatch = useDispatch();

  const onSortValue = (type: SortValue) => {
    dispatch(offersSortAction(type));
    setStatus(!status);
  };

  const changeStatus = () => {
    setStatus(!status);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={changeStatus}>
        {offersSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--open': status === true})}>
        {Object.values(SortValue).map((sortItem) => (
          <li
            key={sortItem}
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortValue(sortItem);
            }}
          >
            {sortItem}
          </li>),
        )}
      </ul>
    </form>
  );
}
