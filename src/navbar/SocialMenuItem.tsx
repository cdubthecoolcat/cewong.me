import React from 'react';
import {IconButton} from '@material-ui/core';

export interface SocialMenuItemProps {
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

export default SocialMenuItem;
