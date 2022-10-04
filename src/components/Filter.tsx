import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { GET_TRIP_LIST } from '../utils/types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TRIP_TYPES } from '../constants';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

export default function FilterComponent() {
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();

  const [state, setState] = useState<object>({
    School: true,
    Business: true,
    Holiday: true,
  });

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

  return (
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
  );
}
