const { Contact } = require("../../model/schemas");
const listContacts = async (req, res, next) => {
  try {
    const results = await Contact.find({}, "name email phone favorite");
    res.json({
      status: "success",
      code: 200,
      data: { results },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = listContacts;
