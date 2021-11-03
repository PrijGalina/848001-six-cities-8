import {useRef, useEffect} from 'react';
import {Icon, IconOptions, Map as MapContainer, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Location} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, PIN_SIZE, PIN_ANCHOR} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: string;
  locations: Location[];
  hoverPoint?: Location,
  height: number,
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

function getMarkers(locations: Location[], map: MapContainer, hoverPoint?: Location) {
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

function Map ({city, locations, hoverPoint, height}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      getMarkers(locations, map, hoverPoint);
    }
  }, [map, locations, hoverPoint, height]);

  return <section className="cities__map map" style={{height: `${height}px`}} ref={mapRef}></section>;
}

export default Map;
