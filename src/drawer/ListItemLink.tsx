import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export interface ListItemLinkProps {
  name: string;
  icon?: any;
  link: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const Icon = props.icon;
  return (
    <ListItem
      button
      component={Link}
      to={props.link}>
      {props.icon ?
        <ListItemIcon>
          <Icon />
        </ListItemIcon> :
          null
      }
      <ListItemText primary={props.name} />
    </ListItem>
  );
}

export default ListItemLink;
