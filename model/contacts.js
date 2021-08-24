const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data).find((user) => String(user.id) === contactId);
};

const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
  const users = JSON.parse(data);
  const usersFiltered = users.filter((user) => user.id !== contactId);
  const [deletedContact] = users.filter((user) => user.id === contactId);

  fs.writeFile(contactsPath, JSON.stringify(usersFiltered, null, "\t"));
  return deletedContact !== [] ? deletedContact : null;
};

const addContact = async (body) => {
  const id = uuidv4();
  const record = { id, ...body };
  const data = await fs.readFile(contactsPath);
  const users = JSON.parse(data);
  users.push(record);
  fs.writeFile(contactsPath, JSON.stringify(users, null, "\t"));
  return record;
};

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

/* function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data)))
    .catch((error) => console.log(error.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.filter((user) => user.id == contactId);
      console.table(user);
    })
    .catch((error) => console.log(error.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const users = JSON.parse(data);
      const usersFiltered = users.filter((user) => user.id != contactId);
      fs.writeFile(contactsPath, JSON.stringify(usersFiltered, null, "\t"));
      console.log("Contact removed");
    })
    .catch((error) => console.log(error.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
    .then((data) => {
      const users = JSON.parse(data);
      const id = Date.now();
      users.push({ id: id, name: name, email: email, phone: phone });
      fs.writeFile(contactsPath, JSON.stringify(users, null, "\t"));
      console.log("Contact added");
    })
    .catch((error) => console.log(error.message));
}  */

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
