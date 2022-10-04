import { GET_DETAILS } from '../utils/types';
import { PopupInterface } from '../interfaces';

export const initialState = {
  travelFromDate: undefined,
  travelToDate: undefined,
  source: undefined,
  destination: undefined,
  tripType: undefined,
  latitude: undefined,
  longitude: undefined,
  description: undefined,
  imageURL: undefined,
};

type Action =
  {
    type: string;
    payload: Required<PopupInterface>;
  }


export default function detail(state = initialState, action: Action): PopupInterface {
  const { type, payload } = action;

  switch (type) {
    case GET_DETAILS: {
       return {
        ...state, ...payload
      };
    }
    default:
      return state;
  }
}
