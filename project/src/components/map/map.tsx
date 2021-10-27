import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Location} from '../../types/offers';
//import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {MouseEvent} from 'react';

type MapProps = {
  city: City[];
  points: Location[];
  hoverPoint: {},
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

/*const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});*/

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
            //hoverPoint !== undefined && point.latitude === hoverPoint.latitude && point.longitude === hoverPoint.longitude
            //? currentCustomIcon
            //: defaultCustomIcon,
            defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points]);

  return <section className="cities__map map" style={{height: '752px'}} ref={mapRef}></section>;
}

export default Map;
