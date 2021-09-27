const { Contact } = require("../../model/schemas");

const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;

    if (favorite === undefined) {
      return res.status(400).json({
        message: "missing field favorite",
      });
    }

    const updateContact = await Contact.findByIdAndUpdate(
      id,
      { favorite },
      {
        new: true,
      }
    );
    if (!updateContact) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json({
      contact: updateContact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
