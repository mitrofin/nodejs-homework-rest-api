const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json");

const getContactById = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data).find((user) => String(user.id) === contactId);
};

module.exports = {
  getContactById,
};
