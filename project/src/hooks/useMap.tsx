import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import {MAP_PROPERTY} from '../const';

export default function useMap (mapRef: MutableRefObject<HTMLElement | null>, city: string): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const newLocal = new OpenStreetMapProvider();
  const provider = newLocal;

  useEffect(() => {
    provider.search({ query: city})
      .then((result) => {
        const lat = parseFloat(result[0].raw.lat);
        const lng = parseFloat(result[0].raw.lon);
        return [lat, lng];
      })
      .then((point) => {
        if (mapRef.current !== null && map === null) {
          const instance = new Map(mapRef.current, {
            center: {
              lat: point[0],
              lng: point[1],
            },
            zoom: MAP_PROPERTY.zoomCity,
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
      });
  }, [mapRef, map, city, provider]);

  return map;
}
