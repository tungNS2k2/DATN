// src/components/UserMenu.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { Person, VpnKey, Logout } from '@mui/icons-material';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar>TU</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('/infor')}>
          <Person fontSize="small" />
          <Typography variant="inherit">Infor</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/change-password')}>
          <VpnKey fontSize="small" />
          <Typography variant="inherit">Change Password</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('/logout')}>
          <Logout fontSize="small" />
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
