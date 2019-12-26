import React from "react";
import * as styles from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@material-ui/core';
import { Menu, GitHub, LinkedIn, Brightness4, BrightnessHigh } from '@material-ui/icons';
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
  });
});

interface SocialMenuItemProps {
  icon: any;
  link: string;
}

function SocialMenuItem(props: SocialMenuItemProps) {
  const Icon = props.icon;
  return (
    <IconButton
      href={props.link}
      color="inherit">
      <Icon />
    </IconButton>
  )
}

interface NavbarProps {
  classes: any;
  toggle: any;
  isDark: boolean;
}

export default function Navbar(props: NavbarProps) {
  const [drawerState, setDrawerState] = React.useState<boolean>(false);
  const classes = useStyles();

  const toggleDrawer = (event: React.SyntheticEvent) => {
    if (event && event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setDrawerState(!drawerState);
  }
  
  const items: SocialMenuItemProps[] = [
    { icon: GitHub, link: 'https://github.com/cdubthecoolcat' },
    { icon: LinkedIn, link: '' }
  ];

  const toolBar = (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}>
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          className={classes.title}>
          Connor Wong
        </Typography>
        {!props.isDark ? <Brightness4/> : <BrightnessHigh/>}
        <Switch
          checked={props.isDark}
          onChange={props.toggle}
        />
        {items.map((props: SocialMenuItemProps, index: number) => (
          <SocialMenuItem {...props} key={index} />
        ))}
      </Toolbar>
    </AppBar>
  )

  return (
    <div className={classes.root}>
      {toolBar}
      <SwipeableTempDrawer
        toggleDrawer={toggleDrawer}
        show={drawerState}
      />
    </div>
  );
}
