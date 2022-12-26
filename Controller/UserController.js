const userModel = require("../Model/User");

//to get UserData
const getUser = async (req, res) => {
  const userQuery = {};
  const { name, age, sort } = req.query;
  console.log(req.query);
  if (name) {
    userQuery.name = { $regex: name, $options: "i" };
  }
  if (age) {
    userQuery.age = age;
  }

  //sorting ascending/decending
  let sorting;
  if (sort) {
    sorting = sort.split(",").join(" ");
  }

  //pagination
  const page = Number(req.query.page) || 1;
  const dataLimit = Number(req.query.limit) || 4;

  const skipData = (page - 1) * dataLimit;

  const userData = await userModel
    .find(userQuery)
    .sort(sorting)
    .skip(skipData)
    .limit(dataLimit);

  res.status(200).json({
    message: "ok",
    userData,
  });
};

//to create user
const createUser = async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(201).json({
    message: "user created successfully",
    user,
  });
};

//to updateuser
const updateUser = async (req, res) => {
  const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    message: "user update successfully",
    user,
  });
};

//to delete
const deleteUser = async (req, res) => {
  if (req.params.id.length != 24) {
    return res.status(411).json({
      message: "product id is wrong",
    });
  }
  const user = await userModel.findById(req.params.id);
  if (!user) {
    return res.status(500).json({
      message: "not found",
    });
  }
  user.remove();
  res.status(200).json({
    message: "user deleted",
  });
};

module.exports = { getUser, createUser, updateUser, deleteUser };
