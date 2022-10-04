/* eslint-disable @typescript-eslint/no-var-requires */
import 'mapbox-gl/dist/mapbox-gl.css';

import Map, {
  FullscreenControl,
  NavigationControl,
} from 'react-map-gl';
import React, { useEffect, useState } from 'react';

import MarkerControl from '../components/Marker';
import PopupComponent from '../components/Popup';
import { PopupInterface } from '../interfaces';
import config from '../constants/config.json';
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

interface SelectorProps {
  detail: PopupInterface
};

const GMap = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInterface | null>(null);
  const details = useSelector((state: SelectorProps) => state.detail);

  useEffect(() => {
    if (details.latitude && details.longitude) {
      setPopupInfo(details);
    } else {
      setPopupInfo(null);
    }
  }, [details])

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

        <MarkerControl setPopupInfo={setPopupInfo} />

        {popupInfo && <PopupComponent popupInfo={popupInfo} setPopupInfo={setPopupInfo} />}
      </Map>
    </div>
  );
};

export default GMap;
