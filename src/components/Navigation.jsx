import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  CssBaseline,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    handleClose();
    navigate('/home');
  };

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token!==null && token!==undefined){
        axios.get('http://localhost:5000/authenticated-user-details',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>{
            console.log(res.data)
            setUser(res.data)
        })
    }
  },[navigate])

  return (
    <AppBar position="static" className="navbar">
      <CssBaseline/>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          className="navbar-logo"
          onClick={() => navigate('/home')}
        >
          LOGO
        </Typography>

        {/* Spacer */}
        <div className="navbar-spacer" />

        {/* Navigation Links */}
        <Button 
          onClick={() => navigate('/home')}
          className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
        >
          Home
        </Button>
        <Button 
          onClick={() => navigate('/about')}
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Button>
        <Button 
          onClick={() => navigate('/redirect')}
          className={`nav-link ${location.pathname === '/redirect' ? 'active' : ''}`}
        >
          Redirect
        </Button>

        {/* Profile Section */}
        {user ? (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              className="profile-button"
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
              <MenuItem disabled>{user.name}</MenuItem>
              <MenuItem disabled>{user.email}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button 
            className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
            onClick={() => window.location.href='http://localhost:5000/auth/google'}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;