const express = require("express");
const route = express.Router(); 
const FooterDataController = require('../Controller/footerdayDataController')

route.get("/", FooterDataController.getFooterDay);

module.exports = route;
