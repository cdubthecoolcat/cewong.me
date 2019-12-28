import { createStyles, Grid, Grow, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import About from './About';
import me from './images/me.png';
import { LoadingContext } from '../App';

const useStyles = makeStyles(() => {
  return createStyles({
    main: {
      textAlign: 'center',
      marginTop: 75
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
  const classes = useStyles();

  return (
    <LoadingContext.Consumer>
      {({ loaded, setLoaded }) => (
        <Grid
          item
          xs={12}
          className={classes.main}>
          <Grow
            in={loaded}
            timeout={1000}
            style={growStyle}>
            <Typography variant='h3'>
              Welcome!
            </Typography>
          </Grow>
          <Grow
            in={loaded}
            timeout={1500}
            style={growStyle}>
            <img
              src={me}
              alt='me'
              className={classes.meImg}
              onLoad={setLoaded}
              onError={setLoaded}
            />
          </Grow>
          <Grow
            in={loaded}
            timeout={2000}
            style={growStyle}>
            <About />
          </Grow>
        </Grid>
      )}
    </LoadingContext.Consumer>
  )
}

export default Home;
