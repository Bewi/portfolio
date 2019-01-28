import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './header/Header';
import WrapperLight from './layout/WrapperLight';
import WrapperDark from './layout/WrapperDark';
import Hero from './header/Hero';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#464866',
      dark: '#25274D',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#29648A',
      main: '#2E9CCA',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#AAABB8',
    },
    text: {
      primary: 'white',
      secondary: '#AAABB8'
    }
    // error: will use the default color
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Header />
          <Hero />
          <WrapperLight />
          <WrapperDark />
          <WrapperLight />
          <WrapperDark />
      </MuiThemeProvider>
    );
  }
}

export default App;
