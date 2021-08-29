const app = require("../app");
const db = require("../db/db");

const PORT = process.env.PORT || 3030;

db.then(
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  })
).catch((err) => {
  console.log(`Server is not running. Error message: ${err.message}`);
});
