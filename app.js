const express = require("express");
const createError = require("http-errors");
// const dotenv = require('dotenv').config()

// console.log(dotenv.parsed)

const app = express();
app.use(express.json());

//initialise DB
require('./initDB')();

const CardRoute = require("./Route/Card");
const CardButtonRoute = require("./Route/cardBottom");
const CompanyDetailRoute = require("./Route/companyDetail");
const FooterLinkRoute = require("./Route/footerLink");
const FooterDayDataRout = require("./Route/footerdayData");
const HeaderDataRout = require("./Route/hederData");
const IconDataRout = require("./Route/iconData");
const LeftSideData1Rout = require("./Route/leftSideCard1");
const LeftSideData2Rout = require("./Route/leftSideCard2");
const LeftSideDat3Rout = require("./Route/leftSideCard3");

app.use("/card", CardRoute);
app.use("/cardbutton", CardButtonRoute);
app.use("/companyDetail", CompanyDetailRoute);
app.use("/foorteDay", FooterDayDataRout);
app.use("/footerLink", FooterLinkRoute);
app.use("/headerData", HeaderDataRout);
app.use("/iconData", IconDataRout);
app.use("/leftSideCardA", LeftSideData1Rout);
app.use("/leftSideCardB", LeftSideData2Rout);
app.use("/leftSideCardC", LeftSideDat3Rout);

app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
// console.log(process.env.PORT)
app.listen(9000, () => {
  console.log("Server Start");
});
