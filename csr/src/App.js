import React, { Fragment } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import NavBar from './components/layout/Headers';
import Dashboard from './components/leads/Dashboard';
import store from './store';

class App extends React.Component {

  render(){
    
    return (
      <div className="App">
        <Provider store={store}>
          <Fragment>
           <NavBar />
            <div className="container">
             <Dashboard />
            </div>
          </Fragment>
        </Provider>
      </div>
    )
  }
}

export default App;
