const mongoose = require("mongoose");
module.exports = async function connectDB() {
  const mongodbURL =
    "mongodb+srv://dinesh:vzcbVBmGdar3pDLa@cluster0.q43n9hs.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(
    mongodbURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("mongobd connected");
    }
  );
};
