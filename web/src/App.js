import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
    return ( <
        ThemeProvider >
        <
        CSSReset / > { props.children } <
        /ThemeProvider>
    );
}

export default App;