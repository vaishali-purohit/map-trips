import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Close } from '@mui/icons-material';
import { DrawerStateProps } from '../interfaces/drawer';
import { GET_DETAILS } from '../utils/types';
import Moment from 'moment';
import { PopupInterface } from '../interfaces';
import { getDaysDifference } from '../utils/daysDiff';
import { initialState } from '../reducers/detail.reducer';

interface SelectorProps {
  popupInfo: PopupInterface | null,
  setPopupInfo: (value: PopupInterface | null) => void
};

interface StateProps {
  drawer: DrawerStateProps,
}

const ControllPanel = styled(Box)(() => ({
  position: 'absolute',
  top: 56,
  right: 0,
  maxWidth: 320,
  background: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  margin: 20,

  '@media(max-width: 500px)': {
    bottom: 0,
    right: 0,
    top: 'auto',
  }
}));

const PopupComponent: React.FC<SelectorProps> = ({ popupInfo, setPopupInfo }) => {
  const { tripList } = useSelector((state: StateProps) => state.drawer);
  const dispatch = useDispatch();

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (popupInfo?.latitude) {
      const findIndexOf =
        tripList.findIndex(data => data.latitude === popupInfo?.latitude && data.longitude === popupInfo?.longitude)
      setIndex(findIndexOf);
    };
  }, [popupInfo])

  const handleNext = () => {
    if (index < tripList.length) {
      dispatch({ type: GET_DETAILS, payload: tripList[index + 1] })
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      dispatch({ type: GET_DETAILS, payload: tripList[index - 1] })
    }
  }

  return (
    <ControllPanel>
      <Box>
        <img width="100%" src={popupInfo?.imageURL} />
        <Close
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 5
          }}
          onClick={() => {
            setPopupInfo(null);
            dispatch({ type: GET_DETAILS, payload: initialState });
          }} />
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography>
          Destination:{popupInfo?.destination}
        </Typography>
        <Typography>
          Source: {popupInfo?.source}
        </Typography>
        <Typography>
          Trip Type: {popupInfo?.tripType}
        </Typography>
        <Typography>
          Total Days Spend: {popupInfo ? getDaysDifference(new Date(popupInfo?.travelFromDate || ''), new Date(popupInfo?.travelToDate || '')) : 0}
        </Typography>
        <Typography>
          Travel Date From: {Moment(popupInfo?.travelFromDate).format('MMM.DD, YYYY')}
        </Typography>
        <Typography>
          Travel Date To: {Moment(popupInfo?.travelToDate).format('MMM.DD, YYYY')}
        </Typography>
      </Box>
      <Box>
        <Button disabled={index === 0} onClick={handlePrevious}>Previous</Button>
        <Button disabled={index === tripList.length - 1} onClick={handleNext}>Next</Button>
      </Box>
    </ControllPanel>
  );
};

export default PopupComponent;
