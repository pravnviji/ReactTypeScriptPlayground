import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './props/Parent';
import reportWebVitals from './reportWebVitals';
import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <h1>Hi tes!</h1>
      <Parent/>
      <GuestList/>
    </div>
  );
};

 ReactDOM.render(<App/>,document.querySelector('#root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
