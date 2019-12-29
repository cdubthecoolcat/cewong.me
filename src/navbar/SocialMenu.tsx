import { Menu, IconButton } from '@material-ui/core';
import React from 'react';
import { GitHub, LinkedIn, MoreVert } from '@material-ui/icons';

interface SocialMenuItemProps {
  icon: any;
  link: string;
}

export const SocialMenuItem = React.forwardRef((props: SocialMenuItemProps, ref: React.Ref<HTMLAnchorElement>) => {
  const Icon = props.icon;
  return (
    <IconButton
      href={props.link}
      color='inherit'
      ref={ref}>
      <Icon />
    </IconButton>
  )
});

const menuItems: SocialMenuItemProps[] = [
  { icon: GitHub, link: 'https://github.com/cdubthecoolcat' },
  { icon: LinkedIn, link: '' }
];

const menuItemElements = menuItems.map((props: SocialMenuItemProps, index: number) => (
  <SocialMenuItem {...props} key={index} />
));

interface SocialMenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: Function;
  mobile: boolean;
  openMenu: any;
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
          <Menu
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
