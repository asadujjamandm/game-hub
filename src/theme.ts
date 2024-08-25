import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({
    config,
    colors: {
        // purple: {
        //     50: '#ffe3ff',
        //     100: '#ffb2ff',
        //     200: '#ff80ff',
        //     300: '#fe4efe',
        //     400: '#fe20fe',
        //     500: '#e50ce4',
        //     600: '#b204b1',
        //     700: '#80007f',
        //     800: '#4e004d',
        //     900: '#1d001c'        
        // }
        gray:{
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111' 
        }
    }
});

export default theme;