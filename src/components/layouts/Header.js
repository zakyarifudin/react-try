import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button :{
    float: 'right',
  }
};



export default class Header extends Component {
  
  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              Menu
            </Typography>
            <Button color="inherit" className={styles.button}>Login</Button>
            <Button color="inherit" className={styles.button}>Register</Button>
            <Button color="inherit" className={styles.button}>User</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
