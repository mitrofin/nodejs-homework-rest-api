const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json");

const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const users = JSON.parse(data);
  const usersFiltered = users.filter((user) => user.id !== contactId);
  const [deletedContact] = users.filter((user) => user.id === contactId);

  fs.writeFile(contactsPath, JSON.stringify(usersFiltered, null, "\t"));
  return deletedContact !== [] ? deletedContact : null;
};

module.exports = {
  removeContact,
};
