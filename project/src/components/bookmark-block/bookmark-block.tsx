type BookmarkBlockProps = {
  isFavorite: boolean,
  isPropertyDetail?: boolean,
};

export default function BookmarkBlock({isFavorite, isPropertyDetail}: BookmarkBlockProps): JSX.Element {
  const width = (!isPropertyDetail) ? 18 : 31;
  const height = (!isPropertyDetail) ? 19 : 33;
  const simpleClass = isPropertyDetail ? 'property__bookmark-button' : 'place-card__bookmark-button';
  const activeClass = isPropertyDetail ? 'property__bookmark-button--active' : 'place-card__bookmark-button--active';
  const simpleClassSVG = isPropertyDetail ? 'property__bookmark-icon' : 'place-card__bookmark-icon';

  return (
    <button className={`button ${simpleClass} ${isFavorite && activeClass}`} type="button">
      <svg className={simpleClassSVG} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'}  bookmarks</span>
    </button>
  );
}
