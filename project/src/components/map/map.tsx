import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {useRef, useEffect} from 'react';
import {Icon, IconOptions, Map as MapContainer, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Location} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, PIN_SIZE, PIN_ANCHOR} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  height: number,
  width: number,
};

const mapStateToProps = ({DATA}: State) => ({
  city: DATA.city,
  offers: DATA.offers,
  offerInFocus: DATA.offerInFocus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & MapProps;

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

function getMarkers(locations: Location[], map: MapContainer, hoverPoint?: Location | boolean) {
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
      .addTo(map);
  });
}

function Map({city, offers, height, width, offerInFocus}: ConnectedComponentProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const locations = offers.map(({location}) => location);
  console.log('map'); /* eslint-disable-line no-console */
  const hoverPoint = (offerInFocus !== undefined) && offerInFocus.location;

  useEffect(() => {
    if (map) {
      getMarkers(locations, map, hoverPoint);
    }
  }, [map, locations, hoverPoint, height, width, city]);


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

export {Map};
export default connector(Map);
