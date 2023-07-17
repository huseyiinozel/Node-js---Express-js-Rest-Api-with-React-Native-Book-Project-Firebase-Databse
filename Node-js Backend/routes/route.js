const express = require("express");
const router = express.Router();
const createController = require("../controllers/create");
const indexcontroller = require("../controllers/index")
const falsecontroller = require("../controllers/false")
const changecontroller = require("../controllers/changecontroller")

router.post("/create", createController.postdata);
router.get("/",indexcontroller.getdata)
router.get("/false",falsecontroller.getsdata)
router.post("/change",changecontroller.postsdata),
module.exports = router;