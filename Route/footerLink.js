const express = require("express");
const route = express.Router(); 
const FooterLinkController = require('../Controller/footerLinkController')

route.get("/", FooterLinkController.getFooterLink);



module.exports = route;
