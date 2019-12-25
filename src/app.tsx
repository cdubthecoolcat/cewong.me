import React from 'react';
import Navbar from './navbar';
import { ThemeProvider, CssBaseline, createMuiTheme, useMediaQuery } from '@material-ui/core';
import {blue} from '@material-ui/core/colors';
import { useCookies } from 'react-cookie';

export default function App() {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  
  const toggleDarkMode = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    setCookie('darkMode', newDark);
  }

  React.useEffect(() => {
    if (cookies.darkMode !== null) {
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
      <Navbar toggle={toggleDarkMode} isDark={darkMode} />
    </ThemeProvider>
  );
}
