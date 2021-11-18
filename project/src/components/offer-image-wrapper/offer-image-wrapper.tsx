import {Link} from 'react-router-dom';
import cn from 'classnames';

type OfferImageWrapperProps = {
  imageClass: string,
  pathToOffer: string,
  previewImage: string,
  width: string,
  height: string,
};

export default function OfferImageWrapper({imageClass, pathToOffer, previewImage, width, height}: OfferImageWrapperProps): JSX.Element {
  return (
    <div className={cn ('place-card__image-wrapper', imageClass)}>
      <Link to={pathToOffer}>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place" />
      </Link>
    </div>
  );
}
