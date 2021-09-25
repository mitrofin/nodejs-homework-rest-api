const express = require("express");
const router = express.Router();
const { joiSchema } = require("../../model/schemas");
const validation = require("../../middlewares/validation");
const validationMiddleware = validation(joiSchema);

const ctrl = require("../../model");

router.get("/", ctrl.listContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validationMiddleware, ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", validationMiddleware, ctrl.updateContact);

router.patch("/:id/favorite", ctrl.updateFavorite);

module.exports = router;
