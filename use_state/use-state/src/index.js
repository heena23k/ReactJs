import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Data from './Data';
// import App from './App';
//  3rd example
import Form from'./Form'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*  for 2nd example */}
    {/* <Data/> */}
    {/* 3rd  */}
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  1st example using to mport the app 
// // 2nd example using to import the Data.js

