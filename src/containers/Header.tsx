import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Close } from '@mui/icons-material';
import FilterComponent from '../components/Filter';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../components/Sidebar';
import SortComponent from '../components/Sort';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const below500 = useMediaQuery('(max-width: 500px)');

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
          {!below500 && <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block' } }}
          >
            Trips Details
          </Typography>}
          <Box sx={{
            display: 'flex',
            '@media(max-width: 500px)': {
              width: '-webkit-fill-available',
              justifyContent: 'end'
            }
          }}>
            <FilterComponent />
            <SortComponent />
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar {...{ isOpen, setIsOpen }} />
    </>
  );
}
