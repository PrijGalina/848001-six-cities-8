import {useSelector, useDispatch} from 'react-redux';
import {OffersSortAction} from '../../store/action';
import {SORT_VALUE} from '../../const';
import classnames from 'classnames';
import {useState} from 'react';
import {getSort} from '../../store/app-data/selectors';

export default function PlacesSorting(): JSX.Element {
  const [status, setStatus] = useState<boolean>(false);
  const offersSort = useSelector(getSort);
  const dispatch = useDispatch();
  const onSortValue = (value: SORT_VALUE) => {
    dispatch(OffersSortAction(value));
    setStatus(!status);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setStatus(!status)}>
        {offersSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classnames('places__options', 'places__options--custom', {'places__options--open': status===true})}>
        {Object.values(SORT_VALUE).map((element) => (
          <li
            key={element}
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortValue(element);
            }}
          >
            {element}
          </li>),
        )}
      </ul>
    </form>
  );
}
