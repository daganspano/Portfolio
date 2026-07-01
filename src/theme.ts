import { createTheme, type PaletteOptions } from '@mui/material/styles'
import { amber, gray, green, purple, red, yellow } from './constants/color'

const lightPalette: PaletteOptions = {
  error: {
    main: red[500],
    light: red[400],
    dark: red[600],
    contrastText: '#FFF',
  },
  info: {
    main: purple[500],
    light: purple[400],
    dark: purple[600],
    contrastText: '#FFF',
  },
  primary: {
    main: green[500],
    light: green[400],
    dark: green[600],
    contrastText: '#FFF',
  },
  secondary: {
    main: amber[500],
    light: amber[400],
    dark: amber[600],
    contrastText: '#FFF',
  },
  success: {
    main: green[500],
    light: green[400],
    dark: green[600],
    contrastText: '#FFF',
  },
  warning: {
    main: yellow[500],
    light: yellow[400],
    dark: yellow[600],
    contrastText: '#FFF',
  },
  background: {
    default: gray[50],
    paper: gray[100],
  },
}

const darkPalette: PaletteOptions = {
  error: {
    main: red[500],
    light: red[400],
    dark: red[600],
    contrastText: '#FFF',
  },
  info: {
    main: purple[500],
    light: purple[400],
    dark: purple[600],
    contrastText: '#FFF',
  },
  primary: {
    main: green[500],
    light: green[400],
    dark: green[600],
    contrastText: '#000',
  },
  secondary: {
    main: amber[500],
    light: amber[400],
    dark: amber[600],
    contrastText: '#FFF',
  },
  success: {
    main: green[500],
    light: green[400],
    dark: green[600],
    contrastText: '#000',
  },
  warning: {
    main: yellow[500],
    light: yellow[400],
    dark: yellow[600],
    contrastText: '#000',
  },
  background: {
    default: gray[900],
    paper: gray[800],
  },
}

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large',
      },
    },
    MuiContainer: {
      defaultProps: { sx: { my: 4, maxWidth: 1000, mx: 'auto' } },
    },
    MuiPaper: {
      defaultProps: {
        sx: { p: 2 },
      },
    },
  },

  palette: lightPalette,

  colorSchemes: {
    light: { palette: lightPalette },
    dark: { palette: darkPalette },
  },

  typography: {},
})

export default theme
