import MenuItem from '../menu-item/menu-item';
import {CITIES} from '../../const';

type TabsProps = {
  onStateChange: React.Dispatch<React.SetStateAction<string>>,
  activeCity: string
};

export default function Tabs({onStateChange, activeCity}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city: string) => {
              const isActive = (city === activeCity);
              return(
                <MenuItem
                  key={city}
                  isActive={isActive}
                  city={city}
                  onStateChange={onStateChange}
                />
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}
