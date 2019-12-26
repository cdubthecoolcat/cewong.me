import React from 'react';
import { Grow, Container, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import me from './images/me.png';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    main: {
      textAlign: "center",
    },
    container: {
      margin: 50,
      padding: 50,
    },
    meImg: {
      width: '20%',
    }
  });
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.main}>
      <Grow
        in={true}
        timeout={1000}
        style={{
          transformOrigin: 'center center'
        }}> 
        <div className={classes.container}>
          <Typography variant="h2">
            Welcome!
          </Typography>
          <img
            src={me}
            alt="me"
            className={classes.meImg}
          />
        </div>
      </Grow>
    </Container>
  )
}
