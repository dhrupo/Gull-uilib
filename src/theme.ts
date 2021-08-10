import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#43454d',
    },
    error: {
      main: red[400],
    },
    background: {
      default: '#F1F3F4',
    },
  },
  typography: {
    fontFamily: "Nunito Sans, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: "local('NunitoSans'), local('NunitoSans-Regular'), url('../fonts/NunitoSans-Regular.ttf') format('ttf')";
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
      `,
    },
  },
});

export default theme;