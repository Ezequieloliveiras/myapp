import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import App from './App'
import './index.css'

import { deepPurple, red } from '@mui/material/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[900]
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)


