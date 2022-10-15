import { createTheme } from '@mui/material';

export const theme = createTheme({
  spacing: 4,
  typography: {
    h1: {
      fontSize: 34,
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#282828',
    },
    primary: {
      main: '#f4f4f4',
    },
    secondary: {
      main: '#a9a9a9',
    },
    text: {
      primary: '#f4f4f4',
    },
  },
});
