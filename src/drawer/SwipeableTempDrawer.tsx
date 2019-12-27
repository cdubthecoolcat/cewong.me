import { List, SwipeableDrawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Folder, Home } from '@material-ui/icons';
import React from 'react';
import ListItemLink, { ListItemLinkProps } from './ListItemLink';

interface SwipeableTempDrawerProps {
  show: boolean;
  toggleDrawer: Function;
}

function SwipeableTempDrawer(props: SwipeableTempDrawerProps) {
  const drawerStyle = makeStyles({
    list: {
      width: 250,
    },
  });
  const classes = drawerStyle();

  const items: ListItemLinkProps[] = [
    { name: 'Home', icon: Home, link: '/' },
    { name: 'Projects', icon: Folder, link: '/projects' }
  ]

  const sideList = (
    <List
      className={classes.list}
      role='presentation'
      onClick={e => props.toggleDrawer(false, e)}
      onKeyDown={e => props.toggleDrawer(false, e)}>
      {items.map((props: ListItemLinkProps) => (
        <ListItemLink {...props} key={props.name} />
      ))}
    </List>
  );

  return (
    <SwipeableDrawer
      open={props.show}
      onClose={e => props.toggleDrawer(false, e)}
      onOpen={e => props.toggleDrawer(true, e)}>
      {sideList}
    </SwipeableDrawer>
  );
}

export default SwipeableTempDrawer;
