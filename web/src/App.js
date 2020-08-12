import React from 'react';
// import logo from './logo.svg';
import {ThemeProvider, CSSReset} from "@chakra-ui/core";

function App({children}) {
    return (
        <ThemeProvider >
            <CSSReset />
            {children}
        </ThemeProvider>
    );
}

export default App;