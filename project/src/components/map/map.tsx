import {useRef, useEffect} from 'react';
import {Icon, IconOptions, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Location} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, PIN_SIZE, PIN_ANCHOR} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: string;
  locations: Location[];
  hoverPoint?: Location,
};

const LeafIcon = (url:string) => {
  const options: IconOptions = {
    iconUrl: url,
    iconSize: PIN_SIZE,
    iconAnchor: PIN_ANCHOR,
  };

  return new Icon(options);
};

const defaultCustomIcon = LeafIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = LeafIcon(URL_MARKER_CURRENT);

function Map({city, locations, hoverPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng,
        });

        const isHoverPoint = hoverPoint && lat === hoverPoint.latitude && lng === hoverPoint.longitude;

        marker
          .setIcon(isHoverPoint ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, locations, hoverPoint]);

  return <section className="cities__map map" style={{height: '752px'}} ref={mapRef}></section>;
}

export default Map;
