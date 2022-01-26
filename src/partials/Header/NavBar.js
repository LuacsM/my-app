import * as React from 'react';
import {useHistory} from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

  const ResponsiveAppBar = () => {
  const history = useHistory()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = route =>{
      history.push(route)
  }

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 12, mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           <img src="https://raw.githubusercontent.com/LuacsM/IMG_GETAG/main/logo-seduc-branca.png" alt="" width="200" height="100%"/>
          </Typography>

          <Box sx={{ flexGrow: 12, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={()=> handleMenuClick('/')}>
                  <Typography textAlign="center">Início</Typography>
                </MenuItem>
                <MenuItem onClick={()=> handleMenuClick('/customers')}>
                <Typography textAlign="center">Listagem</Typography>
              </MenuItem>
              <MenuItem  onClick={()=> handleMenuClick('/add')}>
                  <Typography textAlign="center">Cadastro</Typography>
                </MenuItem>
                <MenuItem onClick={()=> handleMenuClick('/search')}>
                <Typography textAlign="center">Entrar</Typography>
              </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src="https://raw.githubusercontent.com/LuacsM/IMG_GETAG/main/logo-seduc-branca.png" alt="" width="200" height="100%"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            <Button
              onClick={()=> handleMenuClick("/")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Início
            </Button>
            <Button
              onClick={()=> handleMenuClick("/customers")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Listagem
            </Button>
            <Button
              onClick={()=> handleMenuClick("/add")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Cadastro
            </Button>
            <Button
              onClick={()=> handleMenuClick("/search")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Entrar
            </Button>
           
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
