import {BOOKMARK_CARD, BOOKMARK_DETAIL} from '../../const';
import cn from 'classnames';

type BookmarkBlockProps = {
  isFavorite: boolean,
  isPropertyDetail?: boolean,
};

export default function BookmarkBlock({isFavorite, isPropertyDetail}: BookmarkBlockProps): JSX.Element {
  const width = !isPropertyDetail ? BOOKMARK_CARD.width : BOOKMARK_DETAIL.width;
  const height = !isPropertyDetail ? BOOKMARK_CARD.height : BOOKMARK_DETAIL.height;
  const simpleClassSVG = isPropertyDetail ? 'property__bookmark-icon' : 'place-card__bookmark-icon';

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
    <button className={buttonClasses} type="button">
      <svg className={simpleClassSVG} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'}  bookmarks</span>
    </button>
  );
}
