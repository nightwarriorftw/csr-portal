import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import EventDetails from "./components/layouts/EventDetails";
import Events from "./components/snippets/Events";
import Home from "./components/main/Home";
import CreateEvent from "./components/forms/HostEvent";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id" component={EventDetails} />
        <Route exact path="/host" component={CreateEvent} />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
