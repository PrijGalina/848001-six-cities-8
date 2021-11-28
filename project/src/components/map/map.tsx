import {useSelector} from 'react-redux';
import {useRef, useEffect} from 'react';
import L, {Icon, IconOptions, Map as MapContainer, Marker} from 'leaflet';
import useMap from '../../hooks/use-map';
import {Location} from '../../types/offer';
import {UrlMarker, PIN_SIZE, PIN_ANCHOR} from '../../const';
import 'leaflet/dist/leaflet.css';
import {getOfferActive} from '../../store/offer/selectors';
import {Offer} from '../../types/offer';


type MapProps = {
  height: number,
  width: number,
  zoom: number,
  offers: Offer[],
  lat: number,
  lng: number,
};

const LeafIcon = (url: string) => {
  const options: IconOptions = {
    iconUrl: url,
    iconSize: PIN_SIZE,
    iconAnchor: PIN_ANCHOR,
  };

  return new Icon(options);
};

const defaultCustomIcon = LeafIcon(UrlMarker.Default);
export const currentCustomIcon = LeafIcon(UrlMarker.Active);
const markerGroup = L.layerGroup();

function setMarkersOnMap(locations: Location[], map: MapContainer, hoverPoint?: Location | boolean) {
  markerGroup.clearLayers();
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

export default function Map({ height, width, zoom, offers, lat, lng}: MapProps): JSX.Element {
  const offerInFocus = useSelector(getOfferActive);
  const mapRef = useRef(null);
  const map = useMap(mapRef, zoom, lat, lng);
  const locations = offers.map(({location}) => location);
  const hoverPoint = (offerInFocus !== undefined) && offerInFocus.location;
  map && markerGroup.addTo(map);

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
