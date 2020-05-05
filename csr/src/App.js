import React, { Fragment } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import { Provider } from 'react-redux';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';

import NavBar from './components/layout/Headers';
import Dashboard from './components/leads/Dashboard';
import Alerts from './components/layout/Alert';
import PrivateRoute from './components/common/PrivateRoutes';
import { loadUser } from './actions/auth';

import store from './store';

const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
}

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <AlertProvider template={AlertTemplate}
            {...alertOptions}>
            <Router>
              <Fragment>
                <NavBar />
                <Alerts />
                <div className="container">
                  <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertProvider>
        </Provider>
      </div>
    )
  }
}

export default App;
