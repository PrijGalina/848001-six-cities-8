import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

const mapStateToProps = ({ DATA }: State) => ({
  city: DATA.city,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function NoPlacesToStay({city}: PropsFromRedux): JSX.Element {
  document.querySelector('.page--main')?.classList.add('page__main--index-empty');

  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
}

export {NoPlacesToStay};
export default connector(NoPlacesToStay);
