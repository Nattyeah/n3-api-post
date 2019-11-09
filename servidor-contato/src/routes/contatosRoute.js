const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", bodyParser.json(), controller.add)
// router.get("/signo", bodyParser.json(), controller.signo)

module.exports = router