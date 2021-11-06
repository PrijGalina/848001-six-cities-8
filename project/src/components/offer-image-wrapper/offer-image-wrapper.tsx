import {Link} from 'react-router-dom';

type OfferImageWrapperProps = {
  imageClass: string,
  pathToOffer: string,
  previewImage: string,
  width: string,
  height: string,
};
/*
  home:  place-card__image-wrapper,
  favorites:  place-card__image-wrapper,
  property:  place-card__image-wrapper,
*/
export default function OfferImageWrapper({imageClass, pathToOffer, previewImage, width, height}: OfferImageWrapperProps): JSX.Element {
  return (
    <div className={`${imageClass} place-card__image-wrapper`}>
      <Link to={pathToOffer}>
        <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place" />
      </Link>
    </div>
  );
}
