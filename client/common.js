Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe('posts');
Meteor.subscribe('projects');
Meteor.subscribe('ProjectImages');