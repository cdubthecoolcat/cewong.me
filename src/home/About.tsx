import { Typography } from '@material-ui/core';
import React from 'react';

interface AboutProps {
  style?: React.CSSProperties;
}

function About(props: AboutProps) {
  return (
    <Typography
      variant='h6'
      style={props.style}>
      Hi! I'm a programmer who's always <br/>
      trying to learn something new.
    </Typography>
  )
}

export default About;
