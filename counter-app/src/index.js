import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import CounterApp from './CounterApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App sayHello='Hello World'/> */}
    <CounterApp value={ 15 } />
  </React.StrictMode>,
  document.getElementById('root')
);