import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Close } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ mr: 1 }}>
            {!isOpen ? <IconButton
              size="large"
              color="inherit"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
              :
            <IconButton onClick={() => setIsOpen(false)}>
              <Close fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block' } }}
          >
            Trips Details
          </Typography>
          <Box style={{ display: 'flex' }}>
            <Typography marginRight={4}>Filter By</Typography>
            <Typography>Sort By</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar {...{ isOpen, setIsOpen }} />
    </>
  );
}
