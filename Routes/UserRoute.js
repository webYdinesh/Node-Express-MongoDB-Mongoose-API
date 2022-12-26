const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/UserController");

const userRoute = require("express").Router();

userRoute.get("/", getUser);
userRoute.post("/new", createUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;
