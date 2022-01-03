import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Session } from 'meteor/session';

import Home from './Home';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import Login from './Login';
import NotFound from './NotFound';

export function App() {
    const isAuth = useTracker(() => {
        let isAuthenticated = !!Meteor.userId();
        console.log('Auth', isAuthenticated);
        return isAuthenticated;
    });
    Session.set('noteId', undefined);

    return (
        <Router>
            <>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard isAuth={isAuth} />
                    </Route>
                    <Route path="/signup">
                        {isAuth ? <Redirect to="/" /> : <SignUp />}
                    </Route>
                    <Route path="/login">
                        {isAuth ? <Redirect to="/dashboard" /> : <Login />}
                    </Route>
                    <Route path="/" exact>
                        <Home isAuth={isAuth} />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </>
        </Router>
    );
}
