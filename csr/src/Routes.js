import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import EventDetails from './components/layouts/EventDetails';
import Events from './components/snippets/Events';
import Home from './components/main/Home';

function Routes(props) {
    return (
        <div>
            <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/events/:id' component={EventDetails} />
                <Route exact path='/events/' />
            </BrowserRouter>
        </div>
    )
}

export default Routes

