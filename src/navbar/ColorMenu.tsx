import { Popover, IconButton } from '@material-ui/core';
import React from 'react';
import { useCookies } from 'react-cookie';

interface CircleProps {
  color: string;
  setAccentColor: Function;
}

const circleStyle: React.CSSProperties = {
  borderRadius: '50%',
  width: 30,
  height: 30,
  display: 'inline-block',
}

function Circle(props: CircleProps) {
  const setCookie = useCookies(['accent'])[1];

  return (
    <IconButton
      onClick={() => {
        props.setAccentColor(props.color);
        setCookie('accent', props.color, {
          maxAge: 2592000
        });
      }}
    >
      <div 
        style={{...circleStyle, backgroundColor: props.color}} />
    </IconButton>
  )
}

interface ColorMenuProps {
  colors: string[];
  anchorEl: null | HTMLElement;
  setAnchorEl: Function;
  setAccentColor: Function;
}

function ColorMenu(props: ColorMenuProps) {
  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      anchorEl={props.anchorEl}
      open={props.anchorEl != null}
      onClose={() => props.setAnchorEl(null)}>
      {props.colors.map((color: string, index: number) => (
        <Circle color={color} key={index} setAccentColor={props.setAccentColor} />
      ))}
    </Popover>
  )
}

export default ColorMenu;
