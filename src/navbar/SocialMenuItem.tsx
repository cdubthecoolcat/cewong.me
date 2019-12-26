import React from 'react';
import {IconButton} from '@material-ui/core';

export interface SocialMenuItemProps {
  icon: any;
  link: string;
}

class SocialMenuItem extends React.Component<SocialMenuItemProps> {
  render() {
    const Icon = this.props.icon;
    return (
      <IconButton
        href={this.props.link}
        color='inherit'>
        <Icon />
      </IconButton>
    )
  }
}

export default SocialMenuItem;
