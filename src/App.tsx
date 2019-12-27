import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import React from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Routes from './Routes';



function App() {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);


  const toggleDarkMode = (): void => {
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
      <BrowserRouter>
        <Navbar
          toggle={toggleDarkMode}
          isDark={darkMode}
        />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
