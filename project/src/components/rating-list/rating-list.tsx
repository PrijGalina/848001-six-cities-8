import {useDispatch, useSelector} from 'react-redux';
import {Fragment} from 'react';
import {ChangeEvent} from 'react';
import {setRating} from '../../store/action';
import {getRating} from '../../store/offer/selectors';
import {RATING_VALUES} from '../../const';

export default function RatingList(): JSX.Element {
  const dispatch = useDispatch();
  const currentRating = useSelector(getRating);

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const ratingValue = (e.target.checked === true) ? +e.target.value : 0;
    dispatch(setRating(ratingValue));
  };

  return (
    <>
      {RATING_VALUES.map((rating: number, id: number) => {
        const keyValue = `key-${id}`;

        return (
          <Fragment key={keyValue}>
            <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" checked={currentRating === rating} onChange={handleRatingChange} />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </>
  );
}
