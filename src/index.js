import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from '../src/components/context/LoginProvider'
import { FileProvider } from '../src/context/FileContext'
//import { SocketProvider } from '../src/components/context/SocketProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SocketProvider> */}
        <LoginProvider>
          <FileProvider>
            <App />
          </FileProvider>
        </LoginProvider>
      {/* </SocketProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
