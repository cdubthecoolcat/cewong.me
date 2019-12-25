import React from 'react';
import * as styles from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

interface Item {
  name: string;
  icon: any;
  link: string;
}

const items: Item[] = [
  { name: 'Home', icon: <HomeIcon />, link: '/' },
  { name: 'Projects', icon: <FolderIcon />, link: '/projects' },
]

function ListItemLink(props: any) {
  return <ListItem button component={Link} {...props} />
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
      onKeyDown={e => props.toggleDrawer(false, e)}>
      <List>
        {items.map((item: Item, index: number) => (
          <ListItemLink
            to={item.link}
            key={index}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemLink>
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
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

