const Project = require("../models/Projects")
const mongoose = require("mongoose")
const User = require("../models/User")
const Version = require("../models/versions")
const Model = require("../models/models")


exports.Add_New_Project = async (req,res) =>{
    const user = await User.findOne({email:req.body.email});
    if (User)
    {
        const project = new Project({
            ProjectName: req.body.ProjectName,
            //ProjectImage:req.file.path,
            User: user._id
        })
        project.save()
        .then(result =>{
            res.status(201).json({message: result})
        })
        .catch(err =>{
            res.status(500).json({message: err})
        })
    }

}

exports.show_One_Project = async (req,res) =>{
    const project = await Project.findOne({ProjectName:req.body.ProjectName})
    if(project)
    {
        console.log("project exist")
        const version = await Version.find({Project:project._id})
        if(version.length>0)
        {
            console.log("versions exist exist")
            var lister = [];
            for (let index = 0; index < version.length; index++) {
                const model = await Model.find({version:version[index]._id})
                //lister = lister.push(model)
                console.log(model)
                lister.push(model)
                version.push(model)
                console.log(lister[index])
                //lister = model[index]
                //const element = array[index];
                
            }
            //const model = await Model.find({version:version[0]._id})
                console.log("models exist")
                const Projects = {"Project":project,"Versions":version,"Models":lister}
                console.log("versions found")
                res.json(Projects)

        }

    }
}

/*
exports.Add_New_Version = async (req,res) =>{
    var user = await User.findOne({"email":req.body.email});
    var projectexist = await Project.findOne({"ProjectName":req.body.ProjectName})


    

    if (User && projectexist)
    {
        var versions = []
        versions.push(projectexist.Project.version,projectexist.Project.version.models)
        console.log(versions)
        //console.log(req.body.Project.version[0].models[0].ProjectModelName)
        //console.log(projectexist)
        const project = new Project({
            ProjectName : projectexist.ProjectName,
            User: user._id
        })
        console.log(project)

        project.save()
        .then(result =>{
            res.status(201).json({message: result})

        })
        .catch(err =>{
            res.status(500).json({message: err})
        })
    }
    console.log("no")

}*/