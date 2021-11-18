import cn from 'classnames';
import {useDispatch} from 'react-redux';
import {activeCityAction, offersListAction} from '../../store/action';
import {useSelector} from 'react-redux';
import {getCity} from '../../store/app-data/selectors';

type MenuItemProps = {
  cityItem: string,
};

export default function MenuItem({cityItem}: MenuItemProps): JSX.Element {
  const cityCurrent = useSelector(getCity);
  const dispatch = useDispatch();
  const isActive = cityCurrent === cityItem;

  const onCityValue = (city: string) => {
    dispatch(activeCityAction(city));
    dispatch(offersListAction(city));
  };

  return (
    <li className="locations__item">
      <a className={cn('locations__item-link tabs__item', { 'tabs__item--active': isActive })} href="#/" onClick={() => onCityValue(cityItem)}>
        <span>{cityItem}</span>
      </a>
    </li>
  );
}
