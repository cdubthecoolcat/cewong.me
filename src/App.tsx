import { createMuiTheme, CssBaseline, Fade, LinearProgress, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Routes from './Routes';

export const LoadingContext = React.createContext({
  loaded: false,
  setLoaded: () => {}
});

const booleanStrings = new Set<string>(['true', 'false'])

const needsLoad = new Set<string>(['/']);

function isColor(color: string): boolean {
  let s = new Option().style;
  s.color = color;
  return s.color !== '';
}

function App() {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [accentColor, setAccentColor] = React.useState<string>(blue.A400);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const toggleDarkMode = (): void => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    localStorage.setItem('darkMode', JSON.stringify(newDark));
  }

  React.useEffect(() => {
    const darkModeStorage = localStorage.getItem('darkMode');
    const accentColorStorage = localStorage.getItem('accent');

    if (darkModeStorage !== null && booleanStrings.has(darkModeStorage)) {
      setDarkMode(JSON.parse(darkModeStorage));
    } else {
      setDarkMode(preferDarkMode);
    }

    if (accentColorStorage !== null && isColor(accentColorStorage)) {
      setAccentColor(accentColorStorage)
    }

    if (!needsLoad.has(window.location.pathname)) {
      setIsLoaded(true);
    }
  }, [preferDarkMode]);

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
