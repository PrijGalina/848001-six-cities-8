import {Fragment} from 'react';
import {useState, ChangeEvent} from 'react';
import {RATING_VALUES} from '../../const';

export default function RatingList(): JSX.Element {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>): void => {
    (e.target.checked === true) ? setRatingValue(+e.target.value) : setRatingValue(0);
  };

  return (
    <>
      {RATING_VALUES.map((rating: number, id: number) => {
        const keyValue = `key-${id}`;

        return (
          <Fragment key={keyValue}>
            <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" checked={ratingValue === rating} onChange={handleRatingChange} />
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
