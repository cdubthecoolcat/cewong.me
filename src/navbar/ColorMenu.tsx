import { IconButton, Popover } from '@material-ui/core';
import { blue, deepPurple, pink, teal } from '@material-ui/core/colors';
import React from 'react';

const colors = [
  blue.A400,
  pink.A400,
  deepPurple.A400,
  teal.A400
]

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
  return (
    <IconButton
      onClick={() => {
        props.setAccentColor(props.color);
        localStorage.setItem('accent', props.color);
      }}>
      <div
        style={{...circleStyle, backgroundColor: props.color}} />
    </IconButton>
  )
}

interface ColorMenuProps {
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
      {colors.map((color: string, index: number) => (
        <Circle
          color={color}
          key={index}
          setAccentColor={props.setAccentColor}
        />
      ))}
    </Popover>
  )
}

export default ColorMenu;
