import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    //colors
    --background: #f2f0ec;
    --title-primary: #004C00;
    --text-primary: #181818;
    --text-secondary: #7f7f7f;
    --navbar: rgba(248,247,243,0.97);

    //fonts
    --title-font: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
    --primary-font: Arial, Helvetica, sans-serif;
  }

  [data-theme='dark'] {
    --background: #282b30;
    --title-primary: white;
    --text-primary: white;
    --text-secondary: white;
    --navbar: rgba(24,24,24,0.9);
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <ChakraProvider>
      <Router>
       <App />
      </Router>
    </ChakraProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();