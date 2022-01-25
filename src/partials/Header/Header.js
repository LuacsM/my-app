import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import useStyles from './Header.style';

const Header = () =>{
  const classes = useStyles()

  const {menuOpen, setMenuOpen} = useState(false)

  const handleToggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
    return(
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                
                onClick={() => handleToggleMenu()}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" className={classes.title}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer open={menuOpen} onClose={()=> handleToggleMenu()}>
          <List>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Cadastro de Alunos</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </>
   
    )
}

export default Header