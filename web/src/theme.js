import {theme} from "@chakra-ui/core";

const customTheme = {
    ...theme,
    fonts: {
        heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        mono: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;",
    }
};

export default customTheme;