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
    --background: #f2f0ec;
    --text-primary: #004C00;
  }

  [data-theme='dark'] {
    --background: black;
    --text-primary: white;
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
