import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {useSelector} from 'react-redux';
import {getCity} from '../store/main/selectors';
import {MapCity} from '../types/map';
import {MAP_PROPERTY} from '../const';

export default function useMap (mapRef: MutableRefObject<HTMLElement | null>, zoom: number): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const city: MapCity = useSelector(getCity);
  const lat = city.lat;
  const lng = city.lng;

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance: Map = new Map(mapRef.current, {
        center: {
          lat,
          lng,
        },
        zoom: zoom,
      });

      const layer = new TileLayer(
        MAP_PROPERTY.link,
        {
          attribution: MAP_PROPERTY.attribution,
        },
      );


      instance.addLayer(layer);
      setMap(instance);
    }
    else {
      map && map.setView([lat, lng]);
    }
  }, [lat, lng, map, mapRef, zoom]);

  return map;
}
