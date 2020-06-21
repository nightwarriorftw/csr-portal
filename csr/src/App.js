import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Routes from './Routes';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
  timeout: 2000,
  position: 'top center',
}


function App() {
  return (
    <div>
      <Provider store={store} >
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Routes />
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default App;