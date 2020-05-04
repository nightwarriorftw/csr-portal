import React, { Fragment } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import NavBar from './components/layout/Headers';
import Dashboard from './components/leads/Dashboard';
import Alerts from './components/layout/Alert';

import store from './store';

const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
}

class App extends React.Component {

  render(){
    
    return (
      <div className="App">
        <Provider store={store}>
        <AlertProvider template={AlertTemplate}
          {...alertOptions}>
          <Fragment>
           <NavBar />
           <Alerts />
            <div className="container">
             <Dashboard />
            </div>
          </Fragment>
          </AlertProvider>
        </Provider>
      </div>
    )
  }
}

export default App;
