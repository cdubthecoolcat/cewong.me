import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery, LinearProgress, Fade } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import React from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Routes from './Routes';

export const LoadingContext = React.createContext({
  loaded: false,
  setLoaded: () => {}
});

const hexRegExp = RegExp(/^#(([\da-fA-F]{3}){1,2}|([\da-fA-F]{4}){1,2})$/);

function App() {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [cookies, setCookie] = useCookies(['darkMode', 'accent']);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [accentColor, setAccentColor] = React.useState<string>(blue.A400);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

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

    if (cookies.accent !== undefined) {
      setAccentColor(cookies.accent)
    }
  }, [preferDarkMode, cookies]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: accentColor
      },
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
          setAccentColor={setAccentColor}
        />
        <Fade
          in={!isLoaded}
          timeout={1000}>
          <LinearProgress color="secondary" />
        </Fade>
        <LoadingContext.Provider
          value={{
            loaded: isLoaded,
            setLoaded: () => setIsLoaded(true)
          }}>
          <Routes />
        </LoadingContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
