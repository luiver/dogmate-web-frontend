import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Test from './components/Test'

ReactDOM.render(
    <BrowserRouter>
        {/*<App />*/}
        <Test />
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
