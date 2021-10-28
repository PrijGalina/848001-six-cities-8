import {useRef, useEffect} from 'react';
import {Icon, IconOptions, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Location} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, PIN_SIZE, PIN_ANCHOR} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  cities: City[];
  points: Location[];
  hoverPoint: Location | null,
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

function Map(props: MapProps): JSX.Element {
  const {cities, points, hoverPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, cities[0]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            hoverPoint !== undefined && hoverPoint !== null && point.latitude === hoverPoint.latitude && point.longitude === hoverPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, hoverPoint]);

  return <section className="cities__map map" style={{height: '752px'}} ref={mapRef}></section>;
}

export default Map;
