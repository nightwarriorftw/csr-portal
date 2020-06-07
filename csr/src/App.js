import React, { Fragment } from 'react';
import './App.css';


// import { Router, Route, Switch } from 'react-router-dom';

import Header from './components/layouts/Header';
import Front from './components/snippets/Front';
import Counter from './components/snippets/Counter';
import UpcomingEvents from './components/snippets/UpcomingEvents';
import SkillSet from './components/snippets/Categories';
import Footer from './components/layouts/Footer';

import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Fragment>
          <div id="page">
            <Header />
            <Front />
           
            <UpcomingEvents />
            <SkillSet />
            <Footer />
            {/* <Counter /> */}
          </div>
        </Fragment>
      </Provider>
    </div>
  );
}

export default App;