Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    body: {
        type: String
    },
    userId: {
        type: String,
        autoValue: function(){return Meteor.userId()}
    },
    updatedAt: {
        type: Date,
        autoValue: function(){return new Date()}
    }
}));

Posts.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
    name: {
        type: String,
        max: 100
    },
    description: {
        type: String
    },
    client: {
        type: String,
        max: 100
    },
    type: {
        type: String,
        max: 100
    },
    projectDate: {
        type: String,
        max: 100,
        optional: true
    },
    userId: {
        type: String,
        autoValue: function(){return Meteor.userId()}
    },
    updatedAt: {
        type: Date,
        autoValue: function(){return new Date()}
    },
    projectImage: {
        type: String,
        max: 100,
        optional: true
    },
    projectImage2: {
        type: String,
        max: 100,
        optional: true
    }
}));

Projects.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

ProjectImages = new FS.Collection('ProjectImages', {
    stores:[new FS.Store.GridFS('ProjectImages')]
});

ProjectImages.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function () {
        return true;
    }
});