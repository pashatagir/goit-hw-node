const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://pashtetik:123pashtetik987@cluster1.0yggomk.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
