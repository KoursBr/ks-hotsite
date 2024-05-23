'use client'
import { extendTheme } from '@chakra-ui/react';

const koursTheme = extendTheme({
  colors: {
    primary: '#017EF4',
    text: '#141924',
    gray: {
      200: '#BDC8D3',
      300: '#8b8b8b',
      400: '#AEAEAE',
      500: '#313131',
      600: '#242424',
      700: '#7B7E84',
    },
    dark: {
      100: '#181818'
    }
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
});

export default koursTheme;
