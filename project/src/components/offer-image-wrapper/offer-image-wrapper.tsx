
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {Offer} from '../../types/offer';

type OfferImageWrapperProps = {
  imageClass: string,
  pathToOffer: string,
  width: string,
  height: string,
  offer: Offer,
};

export default function OfferImageWrapper({imageClass, pathToOffer, width, height, offer}: OfferImageWrapperProps): JSX.Element {
  const {previewImage} = offer;

  return (
    <div className={cn ('place-card__image-wrapper', imageClass)}>
      <Link to={pathToOffer}>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place" />
      </Link>
    </div>
  );
}
