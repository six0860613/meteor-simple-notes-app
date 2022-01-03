import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';
import '../api/notesPublication';

import NoteList from './components/NoteList';
import NoteListHeader from './components/NoteListHeader';
import PrivateHeader from './components/PrivateHeader';

function Dashboard(props) {
    const { isAuth } = props;
    if (!isAuth) {
        alert('You have to login to use this function.');
        return <Redirect to="/login" />;
    }
    const notes = useTracker(() => {
        const handler = Meteor.subscribe('notes');
        if (!handler.ready()) {
            console.log('loading');
        }
        return Notes.find().fetch();
    });
    return (
        <>
            <PrivateHeader />
            <div className="page-content">
                <NoteListHeader />
                <NoteList notes={notes} />
            </div>
        </>
    );
}

export default Dashboard;
