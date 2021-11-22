import {Link} from 'react-router-dom';
import RatingBlock from '../rating-block/rating-block';
import BookmarkBlock from '../bookmark-block/bookmark-block';
import cn from 'classnames';
import {offerActiveIdAction} from '../../store/action';
import {useDispatch} from 'react-redux';

type OfferInfoWrapperProps = {
  infoClass: string,
  pathToOffer: string,
  id: number,
};

export default function OfferInfoWrapper({infoClass, pathToOffer, id}: OfferInfoWrapperProps): JSX.Element {
  //const {isFavorite, rating, price, title, type} = offer;
  const dispatch = useDispatch();

  const onClickOffer = (value: number) => {
    dispatch(offerActiveIdAction(value));
  };

  return (
    <div className={cn ('place-card__info', infoClass)}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{/*price*/}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkBlock isFavorite={/*isFavorite*/false}/>
      </div>
      <RatingBlock rating={/*rating*/5}/>
      <h2 className="place-card__name">
        <Link to={pathToOffer} onClick={() => onClickOffer(id)}>{/*title*/}</Link>
      </h2>
      <p className="place-card__type">{/*type*/}</p>
    </div>
  );
}
