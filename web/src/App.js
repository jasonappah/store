import React from 'react';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';
import Login from './Login';
import customTheme from './theme'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={customTheme} >
        <CSSReset />
        <Login />
      </ThemeProvider>
    )
  }
}

export default App;
