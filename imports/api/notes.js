import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
    'notes.insert'() {
        if (!this.userId) {
            throw new Meteor.Error('No-Authorized');
        }

        return Notes.insert({
            title: '',
            body: '',
            userId: this.userId,
        });
    },
});
