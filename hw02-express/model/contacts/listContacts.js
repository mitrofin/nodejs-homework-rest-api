/* const fs = require("fs").promises; */

/* const path = require("path"); */

/* const contactsPath = path.join(__dirname, "../../../db/contacts.json"); */
const { Contact } = require("../../../models/schemas/contact");
const listContacts = async () => {
  const results = await Contact.find({}, "name email phone favorite");
  return results;
};

module.exports = {
  listContacts,
};
