import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav/>
                        {getRouter()}
                    </div>
                </Router>
            </div>
        )
    }
}