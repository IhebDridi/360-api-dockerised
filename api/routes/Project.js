const express = require("express")
const checkAuth = require("../Middleware/Check-auth");
const ProjectController = require("../Controllers/Project")
const fileSaver = require("../Middleware/fileSaver")
const multer = require("multer")

const upload = multer({storage:fileSaver.storager,fileFilter :fileSaver.fileFilterer})

const router = express.Router();

//router.get("/info")

router.post("/AddNewProject",upload.single("ProjectImage"), ProjectController.Add_New_Project)
router.post("/ShowOneProject", ProjectController.show_One_Project)
//router.post("/AddNewVersion", ProjectController.Add_New_Version)

//router.patch("/info")

module.exports = router;