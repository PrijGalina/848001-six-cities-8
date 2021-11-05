import {Link} from 'react-router-dom';

type OfferImageWrapperProps = {
  className: string,
  pathToOffer: string,
  previewImage: string,
  width: string,
  height: string,
};

export default function OfferImageWrapper({className, pathToOffer, previewImage, width, height}: OfferImageWrapperProps): JSX.Element {
  return (
    <div className={`${className}__image-wrapper place-card__image-wrapper`}>
      <Link to={pathToOffer}>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place" />
      </Link>
    </div>
  );
}
