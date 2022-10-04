/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TableProps {
  headings?: any;
  type?: string;
  modal?: any;
  rowData?: any;
  emptyText?: string | null;
}

export interface SidebarProps {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
}
