import { IconButton } from '@material-ui/core';
import React from 'react';

export interface SocialMenuItemProps {
  icon: any;
  link: string;
}

function SocialMenuItem(props: SocialMenuItemProps, ref: React.Ref<HTMLAnchorElement>) {
  const Icon = props.icon;
  return (
    <IconButton
      href={props.link}
      color='inherit'
      ref={ref}>
      <Icon />
    </IconButton>
  )
}

export default React.forwardRef(SocialMenuItem);
