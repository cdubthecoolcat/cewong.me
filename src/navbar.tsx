import React, {Component} from "react";
import * as styles from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4 from '@material-ui/icons/Brightness4';
import BrightnessHigh from '@material-ui/icons/BrightnessHigh';
import SwipeableTempDrawer from './drawer';

const useStyles = (theme: styles.Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

interface NavbarProps {
  classes: any;
  toggle: any;
  isDark: boolean;
}

interface NavbarState {
  drawerShow: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      drawerShow: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }


  toggleDrawer(open: boolean, event: any) {
    if (event && event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    this.setState({ drawerShow: open  });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={e => {this.toggleDrawer(true, e)}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Connor Wong
            </Typography>
            {!this.props.isDark ? <Brightness4/> : <BrightnessHigh/>}
            <Switch
              checked={this.props.isDark}
              onChange={this.props.toggle}
            />
          </Toolbar>
        </AppBar>
        <SwipeableTempDrawer toggleDrawer={this.toggleDrawer} show={this.state.drawerShow}/>
      </div>
    );
  }
}

export default styles.withStyles(useStyles)(Navbar);
