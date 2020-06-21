import React, { Fragment, Component } from 'react';

import Header from '../layouts/Header';
import Front from '../snippets/Front';
import UpcomingEvents from '../snippets/UpcomingEvents';
import Footer from '../layouts/Footer';
import Categories from '../snippets/Categories';
import { Switch, Route } from 'react-router-dom';
import Alerts from '../snippets/Alert';

export default class Home extends Component {
    render() {
        return (
            <div>
                    <Switch>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <Front />
                        <UpcomingEvents />
                        <Categories />
                        <Footer />
                    </Fragment>
                    </Switch>

            </div>
        )
    }
}
