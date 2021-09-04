const { Contact } = require("../../../models/schemas/contact");

const removeContact = async (contactId) => {
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  return result;
};

module.exports = {
  removeContact,
};
