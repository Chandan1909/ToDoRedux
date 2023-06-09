//importing all th required files 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Store';
import { Provider } from 'react-redux';
// using the store variables to be accessible to all the components 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store} >
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
