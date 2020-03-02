import { IconButton, Popover } from '@material-ui/core';
import { GitHub, LinkedIn, Mail, MoreVert } from '@material-ui/icons';
import React from 'react';

interface SocialMenuItemProps {
  icon: any;
  link: string;
}

function SocialMenuItem(props: SocialMenuItemProps) {
  const Icon = props.icon;
  return (
    <IconButton
      href={props.link}
      color='inherit'>
      <Icon />
    </IconButton>
  )
}

const menuItems: SocialMenuItemProps[] = [
  { icon: GitHub, link: 'https://github.com/cdubthecoolcat' },
  { icon: Mail, link: 'mailto:contact@cewong.me' },
  { icon: LinkedIn, link: 'https://www.linkedin.com/in/connor-wong-0a4199169/' }
];

const menuItemElements = menuItems.map((props: SocialMenuItemProps, index: number) => (
  <SocialMenuItem {...props} key={index} />
));

interface SocialMenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: Function;
  mobile: boolean;
  openMenu: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
}

function SocialMenu(props: SocialMenuProps) {
  const menuButton = (
    <IconButton
      onClick={props.openMenu}
      color='inherit'>
      <MoreVert />
    </IconButton>
  );

  return (
    <>
      {props.mobile ?
        <>
          {menuButton}
          <Popover
            anchorEl={props.anchorEl}
            keepMounted
            open={props.anchorEl != null}
            onClose={() => props.setAnchorEl(null)}
            children={menuItemElements}
          />
        </> :
          menuItemElements
      }
    </>
  )
}

export default SocialMenu;
