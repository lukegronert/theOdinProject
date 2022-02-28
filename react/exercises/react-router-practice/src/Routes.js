import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}
