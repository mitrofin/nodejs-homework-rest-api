const mongoose = require("mongoose");
require("dotenv").config();
const app = require("../app");

const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
    console.log("Database connection is successful");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
