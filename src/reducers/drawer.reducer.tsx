import { GET_TRIP_LIST, SORT_TRIP_LIST } from '../utils/types';

import { DrawerStateProps } from '../interfaces/drawer';
import TRIPS from '../constants/trips.json';
import { TRIP_TYPES } from '../constants';
import { sortList } from '../utils/sort';

const initialState: DrawerStateProps = {
  tripList: TRIPS,
  type: TRIP_TYPES,
  sort: null
};

type Action =
  {
    type: string;
    payload: {
      type: string[] | string,
      sort: string | null
    }
  }

export default function drawer(state = initialState, action: Action): DrawerStateProps {
  const { type, payload } = action;

  switch (type) {
    case GET_TRIP_LIST: {
      let list = TRIPS;
      list = (
        list.filter((data: { tripType: string; }) => payload.type.includes(data.tripType))
      )

      if (state.sort) {
        list = sortList(list, state.sort)
      }

      return {
        ...state,
        tripList: list,
        type: payload.type
      };
    }
    case SORT_TRIP_LIST: {
      const list = sortList(state.tripList, payload.sort);

      return {
        ...state,
        tripList: list,
        sort: payload.sort
      };
    }
    default:
      return state;
  }
}
