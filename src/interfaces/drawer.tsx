export interface StateProps {
  open: boolean,
  position: string,
  noOverlay: boolean,
};

export interface ActionProps {
  type: string,
  payload: StateProps,
};
