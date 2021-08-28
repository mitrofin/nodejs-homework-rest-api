const fs = require("fs").promises;

const path = require("path");

const contactsPath = path.join(__dirname, "../../../db/contacts.json");

const updateContact = async (contactId, body) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);

  const contact = contacts.find((contact) => String(contact.id) === contactId);
  const newContact = { ...contact, ...body };

  contacts.forEach((item, i) => {
    if (String(item.id) === contactId) contacts[i] = newContact;
  });
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, "\t"));
  return newContact.id ? newContact : null;
};

module.exports = {
  updateContact,
};
