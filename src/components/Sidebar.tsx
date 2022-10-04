import { Box, Drawer, IconButton, Typography, styled, useMediaQuery } from '@mui/material';

import { Close } from '@mui/icons-material';
import { DrawerStateProps } from '../interfaces/drawer';
import { SidebarProps } from '../interfaces/component';
import { TRIP_HEADING } from '../constants/index';
import TableData from './Table';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  marginTop: theme.spacing(2),
  ...theme.mixins.toolbar,
}));

const NoDataDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto auto',

  '& p': {
    textAlign: 'center',
  },
}));

interface SelectorProps {
  drawer: DrawerStateProps
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const { tripList, sort } = useSelector((state: SelectorProps) => state.drawer);

  const below500 = useMediaQuery('(max-width: 500px)');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [sort])

  return (
    <Drawer variant="persistent" hideBackdrop={true} open={isOpen} sx={{
      '& .MuiDrawer-paper': {
        zIndex: 100,
      },
    }}>
      <DrawerHeader sx={{ mr: 1 }}>
        <IconButton onClick={() => setIsOpen(false)}>
          <Close fontSize="large" />
        </IconButton>
      </DrawerHeader>
      <Box sx={{ width: below500 ? 360 : 400, p: 1 }}>
        <Typography fontSize={18} fontWeight={600} marginBottom={2}>Vistied Trips List</Typography>
        <Box>
          {!tripList.length ? (
            <NoDataDiv>
              <p>No trips yet</p>
            </NoDataDiv>
          ) : (
            <TableData headings={TRIP_HEADING} type="trips" rowData={tripList || []} emptyText="No offers yet" />
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
