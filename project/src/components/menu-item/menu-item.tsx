import classnames from 'classnames';
import {useDispatch} from 'react-redux';
import {ActiveCityAction, OffersListAction} from '../../store/action';

type MenuItemProps = {
  isActive: boolean,
  cityItem: string,
};

export default function MenuItem({isActive, cityItem}: MenuItemProps): JSX.Element {
  const dispatch = useDispatch();

  const onCityValue = (city: string) => {
    dispatch(ActiveCityAction(city));
    dispatch(OffersListAction(city));
  };

  return (
    <li className="locations__item">
      <a className={classnames('locations__item-link tabs__item', { 'tabs__item--active': isActive })} href="#/" onClick={() => onCityValue(cityItem)}>
        <span>{cityItem}</span>
      </a>
    </li>
  );
}
