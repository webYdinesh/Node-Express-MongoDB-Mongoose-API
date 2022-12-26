const express = require("express");
const connectDB = require("./Database/MongoDB");
const app = express();
const Router = require("./Routes/MainRouter");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
app.use(express.json());
const PORT = process.env.PORT;
//Connecting to DB
connectDB();
//MainRouter
app.use("/", (req, res) => {
  res.send("Hit /api/v1/user To get the API Response.");
});
app.use("/api/v1", Router);

//Listing Port
app.listen(PORT, () => {
  console.log(`Listening On ${PORT}`);
});
