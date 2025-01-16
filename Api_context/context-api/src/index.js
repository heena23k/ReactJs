import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import A from './A';
import B from './B';
import C from './C';
import UseReducerTutorial from './USeReducerTutorial'
import UseRefEx from'./UseRefEx'
import UseRef2 from './UseRef2';
import UseRefDom from './UseRefDom';
import CustomHook from './CustomHook';
import USeLayoutExample from './USeLayoutExample';
import UseTransitonExample from './UseTransitonExample';
import HOC from './HOC';
import Parent from './Parent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <A/> */}
   {/* <B/> */}
   {/* <C/> */}
   {/* <UseReducerTutorial/> */}
   {/* <UseRefEx/>/ */}
{/* <UseRef2/> */}
{/* <UseRefDom/> */}
{/* <CustomHook/> */}
{/* <USeLayoutExample/> */}
{/* <UseTransitonExample/> */}
{/* <HOC/> */}
<Parent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

