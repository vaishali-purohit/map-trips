import { Box, Drawer, IconButton, styled } from '@mui/material';

import { Close } from '@mui/icons-material';
import { SidebarProps } from '../interfaces/component';
import TRIPS from '../constants/trips.json';
import TableData from './Table';
import { tripHeading } from '../constants/index';

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

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
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
      <Box sx={{ width: 400, p: 3 }}>
        <Box>
          {!TRIPS.length ? (
            <NoDataDiv>
              <p>No trips yet</p>
            </NoDataDiv>
          ) : (
            <TableData headings={tripHeading} type="trips" rowData={TRIPS || []} emptyText="No offers yet" />
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
