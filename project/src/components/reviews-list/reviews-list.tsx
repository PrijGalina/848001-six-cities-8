import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/review';

type reviewsProps = {
  reviews: Review[],
}

export default function ReviewsList({reviews}: reviewsProps): JSX.Element {
  return(
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{(reviews) ? reviews.length : 0}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review: Review) => {
            const keyValue = `${review.id}`;
            return (
              <ReviewItem key={keyValue} review={review}/>
            );
          })
        }
      </ul>
    </>
  );
}
