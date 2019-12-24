import React from "react";
import * as styles from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableTempDrawer from './drawer';

const useStyles = styles.makeStyles((theme: styles.Theme) => {
  return styles.createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    show: false,
  });


  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' ||
     (event as React.KeyboardEvent).key === 'Shift')

    ) {
      return;
    }
    setState({ show: open  });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Connor Wong
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableTempDrawer toggleDrawer={toggleDrawer} show={state.show}/>
    </div>
  );
}
