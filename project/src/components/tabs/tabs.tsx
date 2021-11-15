import {useSelector, useDispatch} from 'react-redux';
import {State} from '../../types/state';
import MenuItem from '../menu-item/menu-item';
import {CITIES} from '../../const';

const mapStateToProps = ({ DATA }: State) => ({
  city: DATA.city,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Tabs(props: PropsFromRedux): JSX.Element {
  const {city} = props;

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

export {Tabs};
export default connector(Tabs);
