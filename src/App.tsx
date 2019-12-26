import React from 'react';
import Navbar from './navbar/Navbar';
import { ThemeProvider, CssBaseline, createMuiTheme, useMediaQuery } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { useCookies } from 'react-cookie';
import { Switch, Route } from 'react-router';
import Projects from './projects/projects';
import Home from './home/home';

function App(props: any) {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  
  const toggleDarkMode = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    setCookie('darkMode', newDark, {
      maxAge: 86400
    });
  }

  React.useEffect(() => {
    if (cookies.darkMode !== undefined) {
      setDarkMode(JSON.parse(cookies.darkMode));
    } else {
      setDarkMode(preferDarkMode);
    }
  }, [preferDarkMode, cookies]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: blue,
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        toggle={toggleDarkMode}
        isDark={darkMode}
        {...props}
      />
      <Switch>
        <Route
          path='/projects'
          component={Projects}
        />
        <Route
          path='/'
          component={Home}
        />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
