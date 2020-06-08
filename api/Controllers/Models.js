const Version = require("../models/versions")
const mongoose = require("mongoose")
const Model = require("../models/models")




exports.Add_New_Model = async (req,res) =>{
    const version = await Version.findOne({versionName:req.body.versionName});
    if (version)
    {

        const model = new Model({
            ProjectModelName: req.body.ProjectModelName,
            source: req.body.source,
            annotations: req.body.annotations,
            numberOfPuces: req.body.numberOfPuces,
            //modelUrl: req.body.modelUrl,
            //PointsOfInterest: req.body.PointsOfInterest,
            //PoiModals: req.body.PoiModals,
            
            version: version._id
        })
        model.save()
        .then(result =>{
            res.status(201).json({message: result})
        })
        .catch(err =>{
            res.status(500).json({message: err})
        })
    }

}