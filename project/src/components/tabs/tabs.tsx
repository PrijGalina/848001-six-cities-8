import MenuItem from '../menu-item/menu-item';
import {CITIES} from '../../const';

export default function Tabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((cityItem: string) => (
              <MenuItem
                key={cityItem}
                cityItem={cityItem}
              />))
          }
        </ul>
      </section>
    </div>
  );
}
