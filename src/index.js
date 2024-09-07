import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from '@mui/material'
import '@fontsource/poppins';

const theme = createTheme({
  palette: {
     background: {
      default: "linear-gradient(135deg, #0F103F, #1C1C65)",
    },
    gradient: {
        main: "linear-gradient(135deg, #0F103F, #1C1C65)",
        mainChannel: "0 0 0",
        light: "linear-gradient(135deg, #4aaffd 0%, #4992f8 100%)",
        lightChannel: "0 0 0",
        dark: "linear-gradient(135deg, #4cc2ff 0%, #4aa0fa 100%)",
        darkChannel: "0 0 0",
        contrastText: "#fff",
        contrastTextChannel: "0 0 0"
      },
    
    primary: {
      main: "#0F103F"
      
    },
     secondary: {    
      main: "#1C1C65"
    },

  },

  typography:{
    fontFamily: 'Poppins, Arial, sans-serif',
    h1:{
      fontSize: '2rem',
      fontWeight: 'normal',
      color: '#FFF'
    },
    h2:{
      fontSize:'1.75rem'
    },
    h3:{
      fontSize: '0.8rem',
      color: '#FFF'
    },
    body1:{
      fontSize: '0.8rem',
      color:'#FFF'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

