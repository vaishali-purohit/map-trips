import { DrawerStateProps } from '../interfaces/drawer';
import { GET_TRIP_LIST } from '../utils/types';
import TRIPS from '../constants/trips.json';

const initialState: DrawerStateProps = {
  tripList: TRIPS,
  type: 'all',
};

type DrawerAttrs = {
  tripList?: [],
  type: string,
}

type Action =
  {
    type: string;
    payload: Required<DrawerAttrs>;
  }


export default function drawer(state = initialState, action: Action): DrawerStateProps {
  const { type, payload } = action;

  switch (type) {
    case GET_TRIP_LIST: {
      let list = TRIPS;
      if (payload.type !== 'all') {
        list = (
          list.filter((data: { tripType: string; }) => data.tripType.toLowerCase() === payload.type.toLowerCase())
        )
      }
      return {
        ...state,
        tripList: list,
        type: payload.type
      };
    }
    default:
      return state;
  }
}
