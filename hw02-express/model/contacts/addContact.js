/* const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json"); */

const { Contact } = require("../../../models/schemas/contact");

const addContact = async (body) => {
  try {
    const result = await Contact.create(body);
    return result;
  } catch (error) {
    if (error.name === "ValidationError") {
      error.status = 400;
    }
    throw error;
  }
};

module.exports = {
  addContact,
};
