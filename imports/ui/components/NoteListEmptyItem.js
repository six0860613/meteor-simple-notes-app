import React from 'react';
import moment from 'moment';

function NoteListEmptyItem(props) {
    const { title, updatedAt } = props;
    return (
        <>
            <h5>You have no notes.</h5>
            <p>Click the button to create new note.</p>
        </>
    );
}

export default NoteListEmptyItem;
