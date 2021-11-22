import {useSelector} from 'react-redux';
import {useRef, useEffect} from 'react';
import {Icon, IconOptions, Map as MapContainer, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Location} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, PIN_SIZE, PIN_ANCHOR} from '../../const';
import 'leaflet/dist/leaflet.css';
import {getOffer, getOffers} from '../../store/app-data/selectors';
import L from 'leaflet';

type MapProps = {
  height: number,
  width: number,
};

const LeafIcon = (url: string) => {
  const options: IconOptions = {
    iconUrl: url,
    iconSize: PIN_SIZE,
    iconAnchor: PIN_ANCHOR,
  };

  return new Icon(options);
};

const defaultCustomIcon = LeafIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = LeafIcon(URL_MARKER_CURRENT);

function setMarkersOnMap(locations: Location[], map: MapContainer, hoverPoint?: Location | boolean) {
  const markerGroup = L.layerGroup().addTo(map);

  locations.forEach(({latitude: lat, longitude: lng}) => {
    const marker = new Marker({
      lat,
      lng,
    });

    const isHoverPoint =
      hoverPoint !== false &&
      hoverPoint !== true &&
      hoverPoint !== undefined &&
      lat === hoverPoint.latitude &&
      lng === hoverPoint.longitude;

    marker
      .setIcon(isHoverPoint ? currentCustomIcon : defaultCustomIcon)
      .addTo(markerGroup);
  });
}

export default function Map({ height, width }: MapProps): JSX.Element {

  const offers = useSelector(getOffers);
  const offerInFocus = useSelector(getOffer);
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const locations = offers.map(({location}) => location);
  const hoverPoint = (offerInFocus !== undefined) && offerInFocus.location;

  useEffect(() => {
    if (map) {
      setMarkersOnMap(locations, map, hoverPoint);
    }
  }, [hoverPoint, map, locations]);

  return (
    <section
      className="cities__map map"
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      ref={mapRef}
    />
  );
}
