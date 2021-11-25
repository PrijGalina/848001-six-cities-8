import cn from 'classnames';
import {useDispatch} from 'react-redux';
import {setActiveCity} from '../../store/action';
import {useSelector} from 'react-redux';
import {getCity} from '../../store/main/selectors';
import {MapCity} from '../../types/map';
import {citiesData } from '../../const';

type MenuItemProps = {
  cityItem: string,
};

export default function MenuItem({cityItem}: MenuItemProps): JSX.Element {
  const cityCurrent = useSelector(getCity);
  const cityClick = citiesData.filter((cityObj) => cityObj.title === cityItem)[0];
  const dispatch = useDispatch();
  const isActive = cityCurrent.title === cityItem;

  const handleCityChange = (city: MapCity) => {
    dispatch(setActiveCity(city));
  };

  return (
    <li className="locations__item">
      <a
        className={cn('locations__item-link tabs__item', { 'tabs__item--active': isActive })}
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          handleCityChange(cityClick);
        }}
      >
        <span>{cityItem}</span>
      </a>
    </li>
  );
}
