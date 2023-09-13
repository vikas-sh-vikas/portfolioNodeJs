const express = require("express");
const route = express.Router(); 
const CompanyDetailController = require('../Controller/companyDetailController')

route.get("/", CompanyDetailController.getCompanyDetail);

module.exports = route;
