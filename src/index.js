import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./components/App";
import MainNavigation from "./components/navigation/MainNavigation";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
        <MainNavigation/>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
