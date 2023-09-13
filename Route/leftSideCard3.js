const express = require("express");
const route = express.Router(); 
const LeftCard3Controller = require('../Controller/leftSideCard3Controller')

route.get("/", LeftCard3Controller.getLeftCard3);


module.exports = route;
