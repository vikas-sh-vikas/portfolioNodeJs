const express = require("express");
const route = express.Router(); 
const CardButtonController = require('../Controller/cardButtonController')

route.get("/", CardButtonController.getAllCardButton);

module.exports = route;
