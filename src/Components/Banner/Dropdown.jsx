import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        General
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>General</MenuItem>
        <MenuItem onClick={handleClose}>Ladies</MenuItem>
        <MenuItem onClick={handleClose}>Lower Berth</MenuItem>
        <MenuItem onClick={handleClose}>Diyvang</MenuItem>
        <MenuItem onClick={handleClose}>Tatkal</MenuItem>
        <MenuItem onClick={handleClose}>Premium Tatkal</MenuItem>
      </Menu>
    </div>
  );
}
