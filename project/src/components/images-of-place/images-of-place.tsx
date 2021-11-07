import nextId from 'react-id-generator';

type ImagesOfPlaceProps = {
  images?: string[],
}

export default function ImagesOfPlace({images}: ImagesOfPlaceProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images?.map((image) => {
          const key = nextId();

          return (
            <div key={key} className="property__image-wrapper">
              <img className="property__image" src={image} alt="Studio"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
