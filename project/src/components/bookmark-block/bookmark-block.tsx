import {useSelector, useDispatch} from 'react-redux';
import {sendOfferStatusFavoriteAction} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {getAuthorizationStatus} from '../../store/user/selectors';
import cn from 'classnames';
import {BOOKMARK_CARD, BOOKMARK_DETAIL, AuthorizationStatus, AppRoute} from '../../const';

type BookmarkBlockProps = {
  isFavorite: boolean,
  isPropertyDetail?: boolean,
  forOffer: number,
};

export default function BookmarkBlock({isFavorite, isPropertyDetail, forOffer}: BookmarkBlockProps): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const width = !isPropertyDetail ? BOOKMARK_CARD.width : BOOKMARK_DETAIL.width;
  const height = !isPropertyDetail ? BOOKMARK_CARD.height : BOOKMARK_DETAIL.height;
  const simpleClassSVG = isPropertyDetail ? 'property__bookmark-icon' : 'place-card__bookmark-icon';
  const statusNum = (isFavorite) ? 0 : 1;

  const blockState = {
    id: forOffer,
    status: statusNum,
  };

  const handleSubmit = () => {
    if (authorizationStatus === AuthorizationStatus.Auth){
      dispatch(sendOfferStatusFavoriteAction(blockState));
    }
    else{
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  const buttonClasses = cn (
    'button',
    {
      'property__bookmark-button': isPropertyDetail,
      'place-card__bookmark-button': !isPropertyDetail,
      'property__bookmark-button--active': isFavorite && isPropertyDetail,
      'place-card__bookmark-button--active': isFavorite && !isPropertyDetail,
    },
  );

  return (
    <button className={buttonClasses} type="button" onClick={handleSubmit}>
      <svg className={simpleClassSVG} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'}  bookmarks</span>
    </button>
  );
}
