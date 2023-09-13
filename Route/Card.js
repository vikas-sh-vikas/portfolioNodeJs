const express = require("express");
const route = express.Router(); 
const CardController = require('../Controller/CardController')

route.get("/", CardController.getAllCard);

route.post("/", CardController.saveCard);

route.get("/:id", CardController.getCardById);

route.patch("/:id", CardController.editCard);

route.delete("/:id", CardController.deleteCard);

module.exports = route;
