import { Meteor } from 'meteor/meteor';
import { Notes } from './notes';

if (Meteor.isServer) {
    Meteor.publish('notes', function () {
        return Notes.find({ userId: this.userId });
    });
}
