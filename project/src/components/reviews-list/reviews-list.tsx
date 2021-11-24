import Review from '../review/review';
import {ReviewType} from '../../types/review';

type reviewsProps = {
  reviews: ReviewType[] | undefined,
}

export default function ReviewsList({reviews = []}: reviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {
          reviews.map((review: ReviewType) => {
            const keyValue = `${review.id}`;
            return (
              <Review
                key={keyValue}
                review={review}
              />
            );
          })
        }
      </ul>
    </>
  );
}
