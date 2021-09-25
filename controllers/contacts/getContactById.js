const { Contact } = require("../../model/schemas");

const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      return res.json({
        status: "success",
        code: 200,
        data: { contact },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        data: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
