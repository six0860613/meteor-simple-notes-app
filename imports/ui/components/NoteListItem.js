import React from 'react';
import moment from 'moment';

function NoteListItem(props) {
    const { title, updatedAt } = props;
    return (
        <>
            <h5>{title || 'Untitled Note'}</h5>
            <p>{moment(updatedAt).format('YYYY/MM/DD')}</p>
        </>
    );
}

export default NoteListItem;
