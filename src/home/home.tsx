import { createStyles, Grid, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
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

function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.main}>
        <Grow
          in={!isLoading}
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
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          </div>
        </Grow>
      </div>
    </Grid>
  )
}

export default Home;
