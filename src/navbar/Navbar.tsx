import { AppBar, IconButton, Switch, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import styles, { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Brightness4, BrightnessHigh, GitHub, LinkedIn, MoreVert } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableTempDrawer from '../drawer/SwipeableTempDrawer';
import SocialMenu from './SocialMenu';
import SocialMenuItem, { SocialMenuItemProps } from './SocialMenuItem';

const useStyles = makeStyles((theme: styles.Theme) => {
  return createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    titleLink: {
      textDecoration: 'none',
      color: 'white'
    }
  });
});

interface NavbarProps {
  toggle: any;
  isDark: boolean;
}

function Navbar(props: NavbarProps) {
  const [drawerState, setDrawerState] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = useStyles();
  const theme = useTheme();
  const mobileWidth = useMediaQuery(theme.breakpoints.down('xs'));

  const openMenu = (event: React.SyntheticEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (): void => {
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
    <IconButton onClick={openMenu} color='inherit'>
      <MoreVert />
    </IconButton>
  );

  const leftSide = (
    <>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Typography
        variant='h6'
        className={classes.title}>
        <Link to='/' className={classes.titleLink}>
          Connor Wong
        </Link>
      </Typography>
    </>
  )

  const rightSide = (
    <>
      {!props.isDark ? <Brightness4 /> : <BrightnessHigh />}
      <Switch
        checked={props.isDark}
        onChange={props.toggle}
      />
      {mobileWidth ? menuButton : itemElements}
      <SocialMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        children={itemElements}
      />
    </>
  )

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          {leftSide}
          {rightSide}
        </Toolbar>
      </AppBar>
      <SwipeableTempDrawer
        toggleDrawer={toggleDrawer}
        show={drawerState}
      />
    </>
  );
}

export default Navbar;
