import classnames from 'classnames';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {ActiveCityAction, OffersListAction} from '../../store/action';
//import {useCityAnswer} from '../../hooks/actions';

type MenuItemProps = {
  isActive: boolean,
  cityItem: string,
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityValue(city: string) {
    dispatch(ActiveCityAction(city));
    dispatch(OffersListAction(city));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & MenuItemProps;

function MenuItem(props: ConnectedComponentProps): JSX.Element {
  const {isActive, onCityValue, cityItem} = props;

  return (
    <li className="locations__item">
      <a className={classnames('locations__item-link tabs__item', { 'tabs__item--active': isActive })} href="#/" onClick={() => onCityValue(cityItem)}>
        <span>{cityItem}</span>
      </a>
    </li>
  );
}

export {MenuItem};
export default connector(MenuItem);
