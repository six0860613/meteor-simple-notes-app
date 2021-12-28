import React from 'react';
import { Redirect } from 'react-router-dom';
import { Session } from 'meteor/session';

import PrivateHeader from './components/PrivateHeader';

function Dashboard(props) {
    const { isAuth } = props;
    if (!isAuth) {
        alert('You have to login to use this function.');
        return <Redirect to="/login" />;
    }
    Session.set('showVisible', true);
    return (
        <>
            <PrivateHeader />
            <div className="page-content">
                <p>Dashboard page content</p>
            </div>
        </>
    );
}

export default Dashboard;
