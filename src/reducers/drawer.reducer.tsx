import { ActionProps, StateProps } from '../interfaces/drawer';

import { GET_DRAWER } from '../utils/types';

const initialState: StateProps = {
  open: false,
  position: 'left',
  noOverlay: false,
};

export default function drawer(state: StateProps = initialState, action: ActionProps) {
  const { type, payload } = action;
  switch (type) {
    case GET_DRAWER:
      return {
        ...state,
        open: payload.open,
        position: payload.position,
        noOverlay: payload.noOverlay,
      };
    default:
      return state;
  }
}
