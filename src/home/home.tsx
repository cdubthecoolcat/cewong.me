import React from 'react';
import { Grow, makeStyles, createStyles, Typography, Grid } from '@material-ui/core';
import me from './images/me.png';

const useStyles = makeStyles(() => {
  return createStyles({
    main: {
      textAlign: 'center',
      marginTop: 100
    },
    meImg: {
      width: 250,
    }
  });
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.main}>
        <Grow
          in={true}
          timeout={1000}
          style={{
            transformOrigin: 'center center'
          }}> 
          <div>
            <Typography variant='h2'>
              Welcome!
            </Typography>
            <img
              src={me}
              alt='me'
              className={classes.meImg}
            />
          </div>
        </Grow>
      </div>
    </Grid>
  )
}
