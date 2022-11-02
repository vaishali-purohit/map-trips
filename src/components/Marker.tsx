import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DrawerStateProps } from '../interfaces/drawer';
import { GET_DETAILS } from '../utils/types';
import { Marker } from 'react-map-gl';
import Pin from '../containers/Pin';
import { PopupInterface } from '../interfaces';

interface SelectorProps {
  drawer: DrawerStateProps,
  detail: PopupInterface
}

interface MarkerProps {
  setPopupInfo: (value: PopupInterface) => void,
}


const MarkerControl: React.FC<MarkerProps> = ({ setPopupInfo }) => {
  const { tripList } = useSelector((state: SelectorProps) => state.drawer);
  const details = useSelector((state: SelectorProps) => state.detail);

  const dispatch = useDispatch();

  const markerClick = (data: PopupInterface) => {
    setPopupInfo(data);
    dispatch({ type: GET_DETAILS, payload: data });
  }

  const markers = useMemo(() => tripList.map((trip: PopupInterface, index: number) => (
    <Marker
      key={`marker-${index}`}
      longitude={trip.longitude}
      latitude={trip.latitude}
      anchor="bottom"
      onClick={e => {
        // If we let the click event propagates to the map, it will immediately close the popup
        // with `closeOnClick: true`
        e.originalEvent.stopPropagation();
        markerClick(trip);
      }}
    >
      <Pin />
    </Marker>
  )), [tripList]);
  
  return (
    <div>
      {markers}
      {details.latitude && details.longitude && <Marker
        key={'marker'}
        longitude={details.longitude}
        latitude={details.latitude}
        anchor="bottom"
      >
        <Pin size={35} />
      </Marker>}
    </div>
  )
};

export default MarkerControl;
