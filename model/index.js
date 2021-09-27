const contactsPath = require("../controllers/contacts");

const listContacts = contactsPath.listContacts;
const getContactById = contactsPath.getContactById;
const addContact = contactsPath.addContact;
const removeContact = contactsPath.removeContact;
const updateContact = contactsPath.updateContact;
const updateFavorite = contactsPath.updateFavorite;

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
};
