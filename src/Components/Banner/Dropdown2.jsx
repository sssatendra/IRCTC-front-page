import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenuClass() {
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
        Select Class
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>AC 1 Tier (1A)</MenuItem>
        <MenuItem onClick={handleClose}>AC 2 Tier (2A)</MenuItem>
        <MenuItem onClick={handleClose}>AC 3 Tier (3A)</MenuItem>
        <MenuItem onClick={handleClose}>Sleeper (SL)</MenuItem>
        <MenuItem onClick={handleClose}>First Class (FC)</MenuItem>
        <MenuItem onClick={handleClose}>AC 3 Economy</MenuItem>
      </Menu>
    </div>
  );
}
