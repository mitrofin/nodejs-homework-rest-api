/* const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json"); */
const { Contact } = require("../../../models/schemas/contact");

const updateContact = async (contactId, body) => {
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId },
    { ...body },
    { new: true }
  );
  return result;
};

module.exports = {
  updateContact,
};
