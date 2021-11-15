import {useSelector} from 'react-redux';
import MenuItem from '../menu-item/menu-item';
import {CITIES} from '../../const';
import {getCity} from '../../store/app-data/selectors';

export default function Tabs(): JSX.Element {
  const city = useSelector(getCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((cityItem: string) => {
              const isActive = (cityItem === city);
              return (
                <MenuItem
                  key={cityItem}
                  isActive={isActive}
                  cityItem={cityItem}
                />
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}
