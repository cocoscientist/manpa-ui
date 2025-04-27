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
import '../css/navigation.css';
import Logo from '../../public/assets/logosquare.png'

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);
  const [authUrl, setAuthUrl] = useState(null);

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
    navigate('/');
  };

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token!==null && token!==undefined){
        axios.get('https://www.manpa.co.in/authenticated-user-details',{
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

  useEffect(() => {
    if (user===null) {
      axios.get('https://www.manpa.co.in/auth/google/authorize')
        .then(res => setAuthUrl(res.data.authorization_url))
        .catch(err => console.log(err));
    }
  }, [user]);

  return (
    <AppBar position="static" className="navbar">
      <CssBaseline/>
      <Toolbar>
        {/* Logo */}
        <div className='navbar-logo' style={{display:'flex'}}><img src={Logo} height={56}/></div>
        {/* <Typography
          variant="h6"
          component="div"
          className="navbar-logo"
          onClick={() => navigate('/')}
        >
          LOGO
        </Typography> */}

        {/* Spacer */}
        <div className="navbar-spacer" />

        {/* Navigation Links */}
        <Button 
          onClick={() => navigate('/')}
          className={`nav-link ${location.pathname === '/home' || location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Button>
        <Button 
          onClick={() => navigate('/blogs')}
          className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
        >
          Blogs
        </Button>
        <Button 
          onClick={() => navigate('/contact')}
          className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Button>
        <Button 
          onClick={() => navigate('/people')}
          className={`nav-link ${location.pathname === '/people' ? 'active' : ''}`}
        >
          People
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
            onClick={() => {if(authUrl !== null) {window.location.href = authUrl} else {console.log('AuthUrl is null')}}}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;