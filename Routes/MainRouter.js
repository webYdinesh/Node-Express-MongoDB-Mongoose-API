const userRoute = require("./UserRoute");
const Router = require("express").Router();

Router.use("/user", userRoute);

module.exports = Router;
