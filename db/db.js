const mongoose = require("mongoose");
require("dotenv").config();
/* const app = require("../app"); */
/* const { DB_HOST } = require("../password"); */

const { DB_HOST /* PORT = 3030 */ } = process.env;
/* const DB_HOST =
  "mongodb+srv://Artem:Uru4iPgDBM1e7m8T@cluster0.wr0f3.mongodb.net/online_shop?retryWrites=true&w=majority"; */
const db = mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  /* useCreateIndex: true, */
  useUnifiedTopology: true,
});
/* .then(() => {
    app.listen(PORT);
    console.log("Database connection is successful");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  }) */
mongoose.connection.on("connected", () => {
  console.log("Database connection is successful");
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose error: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

process.on("SIGINT", async () => {
  mongoose.connection.close(() => {
    console.log("Connection to DB is closed and app is terminated");
    process.exit(1);
  });
});

module.exports = db;
