import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Home from './components/main/Home';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import EventDetails from './components/layouts/EventDetails';
import Events from './components/snippets/Events';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/events/:id' component={EventDetails}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;