const express = require("express");
const route = express.Router(); 
const IconDataController = require('../Controller/iconDataController')

route.get("/", IconDataController.getIconData);


module.exports = route;
