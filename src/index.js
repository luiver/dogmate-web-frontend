import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from "./components/auth/Login";
import reportWebVitals from './reportWebVitals';
import Registration from './components/auth/Registration';

ReactDOM.render(
  <React.StrictMode>
      <Login/>
      <Registration/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
