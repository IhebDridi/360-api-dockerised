const mongoose = require("mongoose");
const ModelSchema = new mongoose.Schema({
    version: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Version",
        required: true
    },
    source: {type: String,required: false},
    annotations: {type:Object,required:false},
    numberOfPuces: {type:Number,required:false},
    ProjectModelName: {type: String,required: true},
    //PointsOfInterest: {type: Object,required: false},
    //PoiModals: {type: Object,required: false},
    //modelUrl: {type: String,required: true},
    dateOfCreation: {required:false,type:Date,default:Date.now()}
});
module.exports = mongoose.model("Model", ModelSchema,"Model");