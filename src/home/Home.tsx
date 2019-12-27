import { createStyles, Grid, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import About from './About';
import me from './images/me.png';

const useStyles = makeStyles(() => {
  return createStyles({
    main: {
      textAlign: 'center',
      marginTop: 100
    },
    meImg: {
      margin: 50,
      width: 250,
    }
  });
});

const growStyle: React.CSSProperties = {
  transformOrigin: 'center center',
};

function Home() {
  document.title = 'Connor Wong';
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.main}>
      <Grow
        in={!isLoading}
        timeout={1000}
        style={growStyle}>
        <Typography variant='h2'>
          Welcome!
        </Typography>
      </Grow>
      <Grow
        in={!isLoading}
        timeout={1500}
        style={growStyle}>
        <img
          src={me}
          alt='me'
          className={classes.meImg}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </Grow>
      <Grow
        in={!isLoading}
        timeout={2000}
        style={growStyle}>
        <About />
      </Grow>
    </Grid>
  )
}

export default Home;
