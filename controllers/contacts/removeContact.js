const { Contact } = require("../../model/schemas");

const removeContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndRemove(req.params.id);
    if (contact) {
      res.json({
        status: "contact deleted",
        code: 200,
        data: { contact },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
