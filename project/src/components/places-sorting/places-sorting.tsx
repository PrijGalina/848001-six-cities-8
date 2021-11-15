import {State} from '../../types/state';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {OffersSortAction} from '../../store/action';
import {SORT_VALUE} from '../../const';
import classnames from 'classnames';
import {useState} from 'react';

const mapStateToProps = ({DATA}: State) => ({
  offersSort: DATA.offersSort,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortValue(value: SORT_VALUE, status: boolean, setStatus: (value: boolean)=> void) {
    dispatch(OffersSortAction(value));
    setStatus(!status);
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlacesSorting({offersSort, onSortValue}: PropsFromRedux): JSX.Element {
  const [status, setStatus] = useState<boolean>(false);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setStatus(!status)}>
        {offersSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classnames('places__options', 'places__options--custom', {'places__options--open': status===true})}>
        {Object.values(SORT_VALUE).map((element) => (
          <li
            key={element}
            className="places__option"
            tabIndex={0}
            onClick={() => {
              onSortValue(element, status, setStatus);
            }}
          >
            {element}
          </li>),
        )}
      </ul>
    </form>
  );
}

export {PlacesSorting};
export default connector(PlacesSorting);
