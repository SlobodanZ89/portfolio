import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212', paper: '#171717' },
    primary: { main: '#4fc3f7' },
    secondary: { main: '#ffd166' },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
  },
})

