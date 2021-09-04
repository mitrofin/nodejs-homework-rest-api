/* const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json"); */
const { Contact } = require("../../../models/schemas/contact");

const getContactById = async (contactId) => {
  const result = await Contact.findOne({ _id: contactId });
  return result;
};

module.exports = {
  getContactById,
};
