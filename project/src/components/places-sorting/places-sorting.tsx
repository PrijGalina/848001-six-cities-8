import {useSelector, useDispatch} from 'react-redux';
import {setSortOffers} from '../../store/action';
import {SortValue} from '../../const';
import cn from 'classnames';
import {useState} from 'react';
import {getSort} from '../../store/main/selectors';

export default function PlacesSorting(): JSX.Element {
  const [status, setStatus] = useState<boolean>(false);
  const sort = useSelector(getSort);
  const dispatch = useDispatch();

  const handleSortChange = (type: SortValue) => {
    dispatch(setSortOffers(type));
    setStatus(!status);
  };

  const handleSortStateChange = () => {
    setStatus(!status);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortStateChange}>
        {sort}
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
              handleSortChange(sortItem);
            }}
          >
            {sortItem}
          </li>),
        )}
      </ul>
    </form>
  );
}
