import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {offerActiveIdAction} from '../../store/action';

type OfferImageWrapperProps = {
  imageClass: string,
  pathToOffer: string,
  width: string,
  height: string,
  id: number,
};

export default function OfferImageWrapper({imageClass, pathToOffer, width, height, id}: OfferImageWrapperProps): JSX.Element {

  const dispatch = useDispatch();

  const onClickOffer = (value: number) => {
    dispatch(offerActiveIdAction(value));
  };

  return (
    <div className={cn ('place-card__image-wrapper', imageClass)}>
      <Link to={pathToOffer} onClick={() => onClickOffer(id)}>
        <img className="place-card__image" src="" width={width} height={height} alt="Place" />
      </Link>
    </div>
  );
}
