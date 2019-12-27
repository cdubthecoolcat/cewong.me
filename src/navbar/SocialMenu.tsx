import { Menu } from '@material-ui/core';
import React from 'react';

interface SocialMenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: Function;
  children: React.ReactElement[];
}

function SocialMenu(props: SocialMenuProps) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      keepMounted
      open={props.anchorEl != null}
      onClose={() => props.setAnchorEl(null)}
      children={props.children} />
  )
}

export default SocialMenu;
