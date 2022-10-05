import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Menu from '@mui/material/Menu';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { SORT_TRIP_LIST } from '../utils/types';
import SortIcon from '@mui/icons-material/Sort';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

export default function SortComponent() {
  const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch();
  const [sort, setSort] = useState<string | null>(null);

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
    dispatch({ type: SORT_TRIP_LIST, payload: { sort: null } });
    handleCloseSortMenu();
  }

  return (
    <Box>
      <Typography sx={{ display: 'flex', gap: 1, '&:hover': { cursor: 'pointer' } }}
        onClick={handleOpenSortMenu}><SortIcon /> Sort</Typography>
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
  );
}
