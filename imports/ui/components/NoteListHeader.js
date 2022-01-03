import React from 'react';
import { Meteor } from 'meteor/meteor';

function NoteListHeader() {
    return (
        <>
            <button
                onClick={() => {
                    Meteor.call('notes.insert');
                }}
            >
                Create New Note
            </button>
        </>
    );
}

export default NoteListHeader;
