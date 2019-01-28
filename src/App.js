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
      main: '#464866',
      dark: '#25274D',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: 'white',
      secondary: '#AAABB8'
    }
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
