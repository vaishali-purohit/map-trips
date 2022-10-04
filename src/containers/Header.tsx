import { GET_TRIP_LIST, SORT_TRIP_LIST } from '../utils/types';
import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Close } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Sidebar from '../components/Sidebar';
import { TRIP_TYPES } from '../constants';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(null);
  const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();

  const [state, setState] = useState<object>({
    School: true,
    Business: true,
    Holiday: true,
  });

  const [sort, setSort] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleFilter = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list = Object.keys(state).filter((key) => (state as any)[key]);
    dispatch({ type: GET_TRIP_LIST, payload: { type: list } });
    handleCloseFilterMenu();
  }

  const handleClear = () => {
    setState({
      School: true,
      Business: true,
      Holiday: true,
    })
    dispatch({ type: GET_TRIP_LIST, payload: { type: TRIP_TYPES } });
    handleCloseFilterMenu();
  }

  const handleOpenFilterMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleCloseFilterMenu = () => {
    setAnchorElFilter(null);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort((event.target as HTMLInputElement).value);
  };

  const handleOpenSortMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorElSort(null);
  };

  const handleSortDone = () => {
    dispatch({ type: SORT_TRIP_LIST, payload: { sort } });
    handleCloseSortMenu();
  }

  const handleSortClear = () => {
    setSort(null);
    dispatch({ type: SORT_TRIP_LIST, payload: { sort: null} });
    handleCloseSortMenu();
  }

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
            <Box>
              <Typography marginRight={4} sx={{ '&:hover': { cursor: 'pointer' } }}
                onClick={handleOpenFilterMenu}>Filter By</Typography>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElFilter}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElFilter)}
                onClose={handleCloseFilterMenu}
              >
                <FormGroup sx={{ width: '15vw', paddingLeft: '10px' }}>
                  {Object.entries(state).map(([key, value]) => (
                    <MenuItem key={key}>
                      <FormControlLabel control={
                        <Checkbox checked={value} onChange={handleChange} name={key} />
                      }
                        label={key} />
                    </MenuItem>
                  ))}
                </FormGroup>
                <Box sx={{ justifyContent: 'center', display: 'inline-flex', width: '100%', gap: 2 }}>
                  <Button variant="contained" onClick={handleClear}>Clear</Button>
                  <Button variant="contained" onClick={handleFilter}>Done</Button>
                </Box>
              </Menu>
            </Box>
            <Box>
              <Typography sx={{ '&:hover': { cursor: 'pointer' } }}
                onClick={handleOpenSortMenu}>Sort By</Typography>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElSort}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElSort)}
                onClose={handleCloseSortMenu}
              >
                <FormGroup sx={{ width: '20vw', paddingLeft: '10px' }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={sort}
                    name="radio-buttons-group"
                    onChange={handleSortChange}
                  >
                    <FormControlLabel value="dateDesc" control={<Radio />} label="From Date (newest first)" />
                    <FormControlLabel value="dateAsec" control={<Radio />} label="From Date (oldest first)" />
                    <FormControlLabel value="A-Z" control={<Radio />} label="Destination (A-Z)" />
                    <FormControlLabel value="Z-A" control={<Radio />} label="Destination (Z-A)" />
                  </RadioGroup>
                </FormGroup>
                <Box sx={{ justifyContent: 'center', display: 'inline-flex', width: '100%', gap: 2 }}>
                  <Button variant="contained" onClick={handleSortClear}>Clear</Button>
                  <Button variant="contained" onClick={handleSortDone}>Done</Button>
                </Box>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar {...{ isOpen, setIsOpen }} />
    </>
  );
}
