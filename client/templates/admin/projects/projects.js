Template.layout.onRendered(function () {
    this.$('.datetimepicker').datetimepicker();
});

Template.add_project.events({
   'submit .add_project_form': function(event){
       event.preventDefault();
       var name = event.target.name.value;
       var type = event.target.type.value;
       var client = event.target.client.value;
       var description = event.target.description.value;
       var projectDate = event.target.projectDate.value;

       var file = $('#projectImage').get(0).files[0];

       if(file){
           fsFile = new FS.File(file);
           ProjectImages.insert(fsFile, function (err, result) {
               if(!err) {
                   var projectImage = '/cfs/files/ProjectImages/' + result._id;

                   Projects.insert({
                       name: name,
                       type: type,
                       description: description,
                       client: client,
                       projectDate: projectDate,
                       projectImage: projectImage
                   });
               }
           });
       } else {
           Projects.insert({
               name: name,
               type: type,
               description: description,
               client: client,
               projectDate: projectDate
           });
       }

       FlashMessages.sendSuccess('Project Added');
       Router.go('/admin/projects');
   }
});

Template.edit_project.events({
    'submit .edit_project_form': function(event){
        event.preventDefault();
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var projectDate = event.target.projectDate.value;

        var file = $('#projectImage').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);
            ProjectImages.insert(fsFile, function (err, result) {
                if(!err) {
                    var projectImage = '/cfs/files/ProjectImages/' + result._id;

                    Projects.update({
                        _id:this._id
                    },{
                        $set: {
                            name: name,
                            type: type,
                            description: description,
                            client: client,
                            projectDate: projectDate,
                            projectImage: projectImage
                        }
                    });
                }
            });
        } else {
            Projects.update({
                _id:this._id
            },{
                $set: {
                    name: name,
                    type: type,
                    description: description,
                    client: client,
                    projectDate: projectDate
                }
            });
        }

        FlashMessages.sendSuccess('Project Updated');
        Router.go('/admin/projects');
    }
});

Template.list_projects.events({
    'click .delete_project': function(event) {
        event.preventDefault();
        if(confirm("Are you sure?")){
            Projects.remove(this._id);
            FlashMessages.sendSuccess('Project Deleted');
        }
    }
});