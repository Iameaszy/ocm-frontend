
import React, { useState, useMemo } from "react"
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { colors, Container, makeStyles } from "@material-ui/core";
import { AppProps } from 'next/dist/shared/lib/router/router';
import NavBar from '../components/NavBar';
import { StylesProvider, createGenerateClassName } from '@mui/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const useStyles = makeStyles((theme) => ({
  main: {
    flex: 1,
    padding: "16px 0px",
  },
}));

export default function App({Component, pageProps}: AppProps) {
  const classes = useStyles();
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        },
      }),
    [mode],
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
              <CssBaseline />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100vh",
                  backgroundColor: colors.grey[200],
                }}
              >
                <nav>
                  <NavBar />
                </nav>
                <main className={classes.main}>
                  <Container>
                    <Component {...pageProps} />
                  </Container>
                </main>
              </div>
        </StylesProvider>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}