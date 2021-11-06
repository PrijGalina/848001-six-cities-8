import {getRatingStyle} from '../../utils';

type RatingBlockProps = {
  rating: number,
  isPropertyDetail?: boolean,
};

export default function RatingBlock({rating, isPropertyDetail}: RatingBlockProps): JSX.Element {
  const simpleClass = isPropertyDetail ? 'property__rating' : 'place-card__rating';
  const simpleClassStar = isPropertyDetail ? 'property__stars' : 'place-card__stars';

  return (
    <div className={`rating ${simpleClass}`}>
      <div className={`rating__stars ${simpleClassStar}`}>
        <span style={{ width: `${getRatingStyle(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
