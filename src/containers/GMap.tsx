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
import { useSelector } from 'react-redux';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

interface SelectorProps {
  detail: PopupInterface
};

const GMap = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInterface | null>(null);
  const details = useSelector((state: SelectorProps) => state.detail);

  const [viewport, setViewport] = useState({
    latitude: 21.7679,
    longitude: 78.8718,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });

  useEffect(() => {
    if (details.latitude && details.longitude) {
      setPopupInfo(details);
      setViewport({ ...viewport, latitude: details.latitude, longitude: details.longitude })
    } else {
      setPopupInfo(null);
      setViewport({ ...viewport, latitude: 21.7679, longitude: 78.8718 })
    }
  }, [details])

  return (
    <div>
      <Map
        {...viewport}
        mapStyle={config.styles.basic}
        mapboxAccessToken={MAPBOX_TOKEN}
        attributionControl={false}
        onDrag={e => setViewport({...viewport, latitude: e.viewState.latitude, longitude: e.viewState.longitude})}
      >
        <FullscreenControl position="bottom-right" />
        <NavigationControl position="bottom-right" showCompass={false} />

        <MarkerControl setPopupInfo={setPopupInfo} />
      </Map>
      {popupInfo && <PopupComponent popupInfo={popupInfo} setPopupInfo={setPopupInfo} />}
    </div>
  );
};

export default GMap;
