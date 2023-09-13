const mongoose = require("mongoose");

module.exports = () => {
    mongoose
    .connect("mongodb://localhost:27017/PortfolioDatabase", {
      useNewUrlParser: true,
      useUnifiedTOpology: true,
    })
    .then(() => {
      console.log("mongodb Connected");
    })
    .catch((err) => console.log(err.message));
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to Db....");
  });
  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  }); 
  mongoose.connection.on("disconnected", () => {
    console.log("mongoose connection is disconnected");
  });
  process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(123)
        console.log("mongoose connection is disconnected due to app termination");
        process.exit(0);
    })
  });
}