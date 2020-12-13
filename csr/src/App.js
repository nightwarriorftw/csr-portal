import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./Routes";
import "./App.css";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layouts/Alerts";

import { loadUser } from "./actions/auth";

const AlertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...AlertOptions}>
            <Alerts />
            <Routes />
          </AlertProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
