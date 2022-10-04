import { GET_DETAILS } from '../utils/types';
import { Popup } from 'react-map-gl';
import { PopupInterface } from '../interfaces';
import React from 'react';
import { getDaysDifference } from '../utils/daysDiff';
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
      focusAfterOpen={true}
      onClose={() => {
        setPopupInfo(null);
        dispatch({ type: GET_DETAILS, payload: initialState })
      }}
    >
      <div>
        Destination:{popupInfo?.destination}
      </div>
      <div>
        Source: {popupInfo?.source}
      </div>
      <div>
        Trip Type: {popupInfo?.tripType}
      </div>
      <div>
        Total Days Spend: {popupInfo ? getDaysDifference(new Date(popupInfo?.travelFromDate || ''), new Date(popupInfo?.travelToDate || '')) : 0}
      </div>
      <img width="100%" src={popupInfo?.imageURL} />
    </Popup>
  );
};

export default PopupComponent;
