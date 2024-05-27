import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { Person, VpnKey, Logout,ManageAccounts } from '@mui/icons-material';
// import styled from 'styled-components';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const [usernameInitial, setUsernameInitial] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      const initial = username.charAt(0).toUpperCase();
      setUsernameInitial(initial);
    }

    const role = localStorage.getItem('role');
    setIsAdmin(role === '[ADMIN]');
  }, []);

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

  const handleMenuItemClickLogout = (path) => {
    navigate(path);
    handleClose();
    localStorage.clear();
  };

  return (
    <div className="userMenu">
      <IconButton onClick={handleClick}>
        {localStorage.getItem('avatarUrl') ? (
          <Avatar src={localStorage.getItem('avatarUrl')} />
        ) : (
          <Avatar>{usernameInitial}</Avatar>
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            zIndex: 1000001,
            top: '62px',
            r: '0',
          },
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
        {isAdmin && (
          <MenuItem onClick={() => handleMenuItemClick('/admin')}>
            <ManageAccounts fontSize="small" />
            <Typography variant="inherit">Manager</Typography>
          </MenuItem>
        )}
        <MenuItem onClick={() => handleMenuItemClickLogout('/signin')}>
          <Logout fontSize="small" />
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
