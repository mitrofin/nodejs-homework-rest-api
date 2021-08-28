const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json");

const addContact = async (body) => {
  const id = uuidv4();
  const record = { id, ...body };
  const data = await fs.readFile(contactsPath);
  const users = JSON.parse(data);
  users.push(record);
  fs.writeFile(contactsPath, JSON.stringify(users, null, "\t"));
  return record;
};

module.exports = {
  addContact,
};
