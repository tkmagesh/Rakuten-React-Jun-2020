import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
/* import SalaryCalculator from './salaryCalculator'; */
import BugTracker from "./bugTracker";

ReactDOM.render(
  <React.StrictMode>
    <h1>My App</h1>
    <hr/>
    <BugTracker/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
