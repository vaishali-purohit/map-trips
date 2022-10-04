import { PopupInterface } from './index';

export interface DrawerStateProps {
  tripList: PopupInterface[],
  type?: string[] | string | null,
  sort?: string | null;
};
