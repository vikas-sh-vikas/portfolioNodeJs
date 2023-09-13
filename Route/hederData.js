const express = require("express");
const route = express.Router(); 
const HeaderDataController = require('../Controller/hederDataController')

route.get("/", HeaderDataController.getHeaderData);

module.exports = route;
