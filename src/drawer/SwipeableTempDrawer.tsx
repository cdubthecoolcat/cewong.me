import * as styles from '@material-ui/core/styles';
import React from 'react';
import { List, SwipeableDrawer } from '@material-ui/core';
import { Folder, Home } from '@material-ui/icons';
import ListItemLink, { ListItemLinkProps } from './ListItemLink';

interface SwipeableTempDrawerProps {
  show: boolean;
  toggleDrawer: Function;
}

function SwipeableTempDrawer(props: SwipeableTempDrawerProps) {
  const drawerStyle = styles.makeStyles({
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
    <div
      className={classes.list}
      role='presentation'
      onClick={e => props.toggleDrawer(false, e)}
      onKeyDown={e => props.toggleDrawer(false, e)}>
      <List>
        {items.map((props: ListItemLinkProps) => (
          <ListItemLink {...props} key={props.name} />
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.show}
        onClose={e => props.toggleDrawer(false, e)}
        onOpen={e => props.toggleDrawer(true, e)}>
        {sideList}
      </SwipeableDrawer>
    </div>
  );
}

export default SwipeableTempDrawer;
