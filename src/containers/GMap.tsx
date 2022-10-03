/* eslint-disable @typescript-eslint/no-var-requires */
import 'mapbox-gl/dist/mapbox-gl.css';

import Map, {
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import React, { useMemo, useState } from 'react';

import Pin from './Pin';
import { PopupInterface } from '../interfaces';
import TRIPS from '../constants/trips.json';
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
      TRIPS.map((trip, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={trip.longitude}
          latitude={trip.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(trip);
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
          latitude: 21.7679,
          longitude: 78.8718,
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
              Destination:{popupInfo.destination}
            </div>
            <div>
              Source: {popupInfo.source}
            </div>
            <div>
              Trip Type: {popupInfo.tripType}
            </div>
            <img width="100%" src={popupInfo.imageURL} />
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default GMap;
