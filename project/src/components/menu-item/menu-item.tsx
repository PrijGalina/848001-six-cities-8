import classnames from 'classnames';

type MenuItemProps = {
  city: string,
  isActive: boolean,
  onStateChange: React.Dispatch<React.SetStateAction<string>>,
};

export default function MenuItem({city,isActive,onStateChange}: MenuItemProps): JSX.Element {
  return(
    <li className="locations__item">
      <a className={classnames('locations__item-link tabs__item', {'tabs__item--active': isActive})} href="#/" onClick={() => onStateChange(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
}
