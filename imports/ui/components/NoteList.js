import React from 'react';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

function NoteList(props) {
    const { notes } = props;
    return (
        <div>
            <p>NoteList ({notes.length})</p>
            {notes.length === 0 ? (
                <NoteListEmptyItem />
            ) : (
                notes.map((v) => {
                    return (
                        <div key={v._id}>
                            <NoteListItem
                                title={v.title}
                                updatedAt={v.updatedAt}
                            />
                        </div>
                    );
                })
            )}
        </div>
    );
}
export default NoteList;
