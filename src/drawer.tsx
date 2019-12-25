import React from 'react';
import * as styles from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

export default function SwipeableTempDrawer(props: any) {
  const drawerStyle = styles.makeStyles({
    list: {
      width: 250,
    },
  });

  const classes = drawerStyle();
  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={e => props.toggleDrawer(false, e)}
      onKeyDown={e => props.toggleDrawer(false, e)}
    >
      <List>
        <ListItemLink href="/projects">
          <ListItemIcon>{<FolderIcon />}</ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemLink>
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.show}
        onClose={e => props.toggleDrawer(false, e)}
        onOpen={e => props.toggleDrawer(true, e)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

