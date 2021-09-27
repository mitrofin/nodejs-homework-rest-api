const { Contact } = require("../../model/schemas");

const addContact = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result },
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = addContact;
