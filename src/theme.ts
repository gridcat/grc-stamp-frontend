import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#732DE2',
      light: '#953EF5',
      dark: '#4c1ea4',
    },
    secondary: {
      main: '#e58842',
      light: '#f4b34a',
      dark: '#d6733c',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'SF UI Text Regular',
      '-apple-system',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default responsiveFontSizes(theme);
