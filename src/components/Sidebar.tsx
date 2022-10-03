import { Box, Button, Drawer, IconButton, Typography, styled } from '@mui/material';

import { Close } from '@mui/icons-material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  marginTop: theme.spacing(2),
  ...theme.mixins.toolbar,
}));

interface Props {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
}

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
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
      <Box sx={{ width: 300, p: 3 }}>
        <Typography variant='h5'>Display Drawer Values</Typography>
        <Box>
          <Typography>Filter By</Typography>
          <Typography>Selected Types</Typography>
        </Box>
        <Box>
          <Typography>Sort By</Typography>
          <Typography>Time</Typography>
          <Typography>Alphabetically</Typography>
        </Box>
        <Box>
          <Typography>Show List of Items</Typography>
        </Box>
        <Box>
          <Button>Next</Button>
          <Button>Previous</Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
