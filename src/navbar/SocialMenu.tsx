import React from 'react';
import { Menu } from '@material-ui/core';

interface SocialMenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: Function;
  children: React.ReactElement[];
}

export default function SocialMenu(props: SocialMenuProps) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={() => props.setAnchorEl(null)}
      {...props} />
  )
}
