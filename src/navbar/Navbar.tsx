import React from "react";
import * as styles from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Switch, useMediaQuery } from '@material-ui/core';
import { GitHub, LinkedIn, Brightness4, BrightnessHigh, MoreVert } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableTempDrawer from '../drawer/SwipeableTempDrawer';
import SocialMenu from './SocialMenu';
import SocialMenuItem, {SocialMenuItemProps} from "./SocialMenuItem";

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

interface NavbarProps {
  classes: any;
  toggle: any;
  isDark: boolean;
}

function Navbar(props: NavbarProps) {
  const [drawerState, setDrawerState] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyles();
  const theme = styles.useTheme();
  const mobileWidth = useMediaQuery(theme.breakpoints.down('xs'));

  const openMenu = (event: React.SyntheticEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (event: React.SyntheticEvent) => {
    if (event && event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setDrawerState(!drawerState);
  };

  const items: SocialMenuItemProps[] = [
    { icon: GitHub, link: 'https://github.com/cdubthecoolcat' },
    { icon: LinkedIn, link: '' }
  ];

  const itemElements = items.map((props: SocialMenuItemProps, index: number) => (
    <SocialMenuItem {...props} key={index} />
  ));

  const menuButton = (
    <IconButton onClick={openMenu} color="inherit">
      <MoreVert />
    </IconButton>
  );

  const toolBar = (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}>
          <MenuIcon />
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
        {mobileWidth ? menuButton : itemElements}
      </Toolbar>
      <SocialMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} children={itemElements} />
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

export default Navbar;
