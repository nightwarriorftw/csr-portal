import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Routes from "./Routes";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/layouts/Alerts";

const AlertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
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

export default App;
