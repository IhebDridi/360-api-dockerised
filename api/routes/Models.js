const express = require("express")
const checkAuth = require("../Middleware/Check-auth");
const ModelController = require("../Controllers/Models")

const router = express.Router();

//router.get("/info")

router.post("/addNewModel", ModelController.Add_New_Model)
//router.post("/AddNewVersion", ProjectController.Add_New_Version)

//router.patch("/info")

module.exports = router;