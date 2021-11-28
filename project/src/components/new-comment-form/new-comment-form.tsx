import {useRef, FormEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sendNewComment} from '../../store/api-actions';
import RatingList from '../rating-list/rating-list';
import {getRating} from '../../store/offer/selectors';
import {getCommentText} from '../../store/offer/selectors';
import {setTextComment, setRating} from '../../store/action';

type NewCommentFormProps = {
  id: number,
}

export default function NewCommentForm({id} : NewCommentFormProps): JSX.Element {
  const dispatch = useDispatch();
  const rating = useSelector(getRating);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const comment: string = useSelector(getCommentText);

  const isDisabled = (textareaRef.current !== null) && (textareaRef.current.value.length < 50 || textareaRef.current.value.length > 300 || rating === 0);

  const handleTextareaChange = (): void => {
    if (textareaRef.current !== null) {
      dispatch(setTextComment(textareaRef.current.value));
    }
  };

  const handleSubmitComment = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const sendData = {
      id,
      rating,
      comment,
    };

    dispatch(sendNewComment(sendData));
    dispatch(setTextComment(''));
    dispatch(setRating(0));
  };

  return (
    <form className="reviews__form form" action="#" onSubmit={handleSubmitComment}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {<RatingList/>}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        ref={textareaRef}
        onChange={handleTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled = {isDisabled}>Submit</button>
      </div>
    </form>
  );
}
