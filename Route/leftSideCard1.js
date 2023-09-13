const express = require("express");
const route = express.Router(); 
const LeftCard1Controller = require('../Controller/leftSideCard1Controller')

route.get("/", LeftCard1Controller.getLeftCard1);


module.exports = route;
