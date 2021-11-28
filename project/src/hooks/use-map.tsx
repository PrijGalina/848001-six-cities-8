
import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer, Marker} from 'leaflet';
import {MAP_PROPERTY} from '../const';
import {useLocation } from 'react-router-dom';
import {currentCustomIcon} from '../components/map/map';

export default function useMap (mapRef: MutableRefObject<HTMLElement | null>, zoom: number, lat: number, lng: number): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance: Map = new Map(mapRef.current, {
        center: {
          lat,
          lng,
        },
        zoom: zoom,
      });

      if (location.pathname !== '/'){
        const marker = new Marker({
          lat,
          lng,
        });
        marker
          .setIcon(currentCustomIcon)
          .addTo(instance);
      }

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
      if (location.pathname !== '/' && map) {
        const marker = new Marker({
          lat,
          lng,
        });
        marker
          .setIcon(currentCustomIcon)
          .addTo(map);
      }
      map && map.setView([lat, lng]);
    }
  }, [lat, lng, location.pathname, map, mapRef, zoom]);

  return map;
}
