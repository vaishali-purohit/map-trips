import { GET_DETAILS } from '../utils/types';
import { Popup } from 'react-map-gl';
import { PopupInterface } from '../interfaces';
import React from 'react';
import { initialState } from '../reducers/detail.reducer';
import { useDispatch } from 'react-redux';

interface SelectorProps {
  popupInfo: PopupInterface | null,
  setPopupInfo: (value: PopupInterface | null) => void
};

const PopupComponent: React.FC<SelectorProps> = ({ popupInfo, setPopupInfo }) => {
  const dispatch = useDispatch();

  return (
    <Popup
      anchor="top"
      longitude={Number(popupInfo ? popupInfo.longitude : 0)}
      latitude={Number(popupInfo ? popupInfo.latitude : 0)}
      onClose={() => {
        setPopupInfo(null);
        dispatch({ type: GET_DETAILS, payload: initialState })
      }}
    >
      <div>
        Destination:{popupInfo ? popupInfo.destination : ''}
      </div>
      <div>
        Source: {popupInfo ? popupInfo.source : ''}
      </div>
      <div>
        Trip Type: {popupInfo ? popupInfo.tripType : ''}
      </div>
      <img width="100%" src={popupInfo ? popupInfo.imageURL : ''} />
    </Popup>
  );
};

export default PopupComponent;
