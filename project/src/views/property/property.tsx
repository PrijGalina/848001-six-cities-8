import {useParams, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchOfferInfoAction, fetchCommentsAboutAction, fetchOffersNearbyAction} from '../../store/api-actions';
import {setOfferActive, setActiveCity} from '../../store/action';
import {getOfferInfo, getComments, getOffersNearby} from '../../store/offer/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import ImagesOfPlace from '../../components/images-of-place/images-of-place';
import AboutPlace from '../../components/about-place/about-place';
import AboutHost from '../../components/about-host/about-host';
import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components//reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import {PagesApp, OFFER_IN_PROPERTY, MAP_PROPERTY, AuthorizationStatus} from '../../const';

type ParamType = {
  id: string,
}

export default function Property(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();
  const {id}: ParamType = useParams();

  useEffect(() => {
    dispatch(setOfferActive(undefined));
    if (id) {
      dispatch(fetchOfferInfoAction(+id));
      dispatch(fetchCommentsAboutAction(+id));
      dispatch(fetchOffersNearbyAction(+id));
    }
  }, [dispatch, id, location]);

  const offer = useSelector(getOfferInfo);
  const comments = useSelector(getComments);
  const offersNearby = useSelector(getOffersNearby);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const images = offer ? offer.images.slice(0, 6) : [];

  const cityAdapted =   offer && {
    title:offer.city.name,
    lat: offer.city.location.latitude,
    lng: offer.city.location.longitude,
    zoom: offer.city.location.zoom,
  };

  offer && cityAdapted && dispatch(setActiveCity(cityAdapted));

  return (
    <div>
      {
        offer &&
        <>
          <section className="property">
            <ImagesOfPlace images={images} />
            <div className="property__container container">
              <div className="property__wrapper">
                <AboutPlace offer={offer} />
                <AboutHost offer={offer} />
                <section className="property__reviews reviews">
                  <ReviewsList reviews={comments} />
                  {authorizationStatus === AuthorizationStatus.Auth && <NewCommentForm />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers = {offersNearby ? offersNearby : []}
                height={MAP_PROPERTY.propertyMapSize.height}
                width={MAP_PROPERTY.propertyMapSize.width}
                zoom = {MAP_PROPERTY.zoomOffer}
                lat = {offer.location.latitude}
                lng = {offer.location.longitude}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  offersNearby &&
                  <OffersList
                    offers={offersNearby}
                    classes={OFFER_IN_PROPERTY}
                    page={PagesApp.Property}
                  />
                }
              </div>
            </section>
          </div>
        </>
      }
    </div>
  );
}
