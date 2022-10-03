/* eslint-disable @typescript-eslint/no-var-requires */
import 'mapbox-gl/dist/mapbox-gl.css';

import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import React, { useMemo, useState } from 'react';

import CITIES from '../constants/cities.json';
import Pin from './Pin';
import { PopupInterface } from '../interfaces';
import config from '../constants/config.json';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

const GMap = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInterface | null>(null);

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <div>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0, 
          pitch: 0
        }}
        mapStyle={config.styles.basic}
        mapboxAccessToken={MAPBOX_TOKEN}
        attributionControl={false}
      >
        <FullscreenControl position="bottom-right" />
        <NavigationControl position="bottom-right" showCompass={false} />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.city}, {popupInfo.state} |{' '}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
              >
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default GMap;
