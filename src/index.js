import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Car, CarFunc, Garage} from './Car';
import {Football, Basketball} from './MyButton';
import {Goal, MadeGoal, MissedGoal} from './Goal';

//import CarFunc from './Car';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cars = ['Chevy','Mazda', 'BMW', 'Toyota'];

root.render(
  <React.StrictMode>
    <App />
    <Car />
    <CarFunc color="red" />
    <Garage cars={cars} />
    <Football />
    <br/>
    <Goal isGoal={true}/>
    <br/>
    Event type example:<br/>
    <Basketball />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
