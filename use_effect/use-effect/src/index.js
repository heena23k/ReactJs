import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseEffect from './UseEffect';
import Fetch from './Fetch';
import MultipleReturn from './MultipleReturn';
import Memo from './Memo';
import Use_Memo from './Use_Memo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffect/> */}
    {/* <Fetch/> */}
{/* <MultipleReturn/> */}
<Memo/>
<useMemo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
