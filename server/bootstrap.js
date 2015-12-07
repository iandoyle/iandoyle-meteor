Meteor.startup(function(){
    if(Meteor.users.find().count() === 0){
        Accounts.createUser({
            username: 'admin',
            email: 'admin@admin.com',
            password: 'password'
        })
    }
});

Meteor.publish('posts', function(){
    return Posts.find();
});

Meteor.publish('projects', function(){
    return Projects.find();
});

Meteor.publish('ProjectImages', function(){
    return ProjectImages.find();
});