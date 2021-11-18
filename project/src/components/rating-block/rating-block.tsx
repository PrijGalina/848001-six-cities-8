import {getRatingStyle} from '../../utils';
import cn from 'classnames';

type RatingBlockProps = {
  rating: number,
  isPropertyDetail?: boolean,
};

export default function RatingBlock({rating, isPropertyDetail}: RatingBlockProps): JSX.Element {
  const ratingClasses = cn (
    'rating',
    {
      'property__rating': isPropertyDetail,
      'place-card__rating': !isPropertyDetail,
    },
  );

  const starsClasses = cn (
    'rating__stars',
    {
      'property__stars': isPropertyDetail,
      'place-card__stars': !isPropertyDetail,
    },
  );

  return (
    <div className={ratingClasses}>
      <div className={starsClasses}>
        <span style={{ width: `${getRatingStyle(rating)}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
