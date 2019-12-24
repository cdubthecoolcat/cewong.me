import React from 'react';
import * as styles from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>

        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.show}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

