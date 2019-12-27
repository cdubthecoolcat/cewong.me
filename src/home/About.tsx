import { GrowProps, Typography } from '@material-ui/core';
import React from 'react';

function About(props: GrowProps) {
  return (
    <Typography variant='h6' {...props}>
      Hi! I'm a programmer who's always trying to learn something new.
    </Typography>
  )
}

export default About;
