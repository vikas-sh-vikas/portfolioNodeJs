const express = require("express");
const route = express.Router(); 
const LeftCard2Controller = require('../Controller/leftSideCard2Controller')

route.get("/", LeftCard2Controller.getLeftCard2);

module.exports = route;
