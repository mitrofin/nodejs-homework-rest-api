const { Contact } = require("../../model/schemas");

const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (contact) {
      res.json({
        status: "updateContact",
        code: 201,
        data: { contact },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: "Not found",
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = updateContact;
