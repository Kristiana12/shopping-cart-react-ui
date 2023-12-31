import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShoppingProvider from './context/context-shopping-cart';

//Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//MUI
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ShoppingProvider>
      <App />
    </ShoppingProvider>
  </React.StrictMode>
);
