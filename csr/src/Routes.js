import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDetails from "./components/layouts/EventDetails";
import Events from "./components/snippets/Events";
import Home from "./components/main/Home";
import CreateEvent from "./components/forms/HostEvent";
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={EventDetails} />
          <Route exact path="/host" component={CreateEvent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
