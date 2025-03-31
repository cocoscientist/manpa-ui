import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
  } from '@mui/material';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    
    // Mock user data - replace with actual Google auth data
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      photoURL: 'https://lh3.googleusercontent.com/a/default-user',
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <AppBar position="static">
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, marginRight: 2, cursor: 'pointer' }}
            onClick={() => navigate('/home')}
          >
            LOGO
          </Typography>
  
          {/* Spacer */}
          <div style={{ flexGrow: 1 }} />
  
          {/* Navigation Links */}
          <Button color="inherit" onClick={() => navigate('/home')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/about')}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate('/redirect')}>
            Redirect
          </Button>
  
          {/* Profile Menu */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ ml: 2 }}
          >
            <Avatar alt={user.name} src={user.photoURL} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navigation;