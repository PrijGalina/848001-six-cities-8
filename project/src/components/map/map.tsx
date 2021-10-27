import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Location} from '../../types/offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City[];
  points: Location[];
  hoverPoint: Location | null,
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [20, 30],
  iconAnchor: [10, 30],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [20, 30],
  iconAnchor: [10, 30],
});

function Map(props: MapProps): JSX.Element {
  const {city, points, hoverPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city[0]);

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
