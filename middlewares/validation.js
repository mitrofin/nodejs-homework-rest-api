/* const validation = (schema) => {
  const valid = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    next();
  };

  return valid;
};

module.exports = validation; */

const Joi = require("joi");
const mongoose = require("mongoose");

const schemaAddContact = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),

  phone: Joi.string()
    .min(9)
    .max(15)
    /* .length(10) */
    /* .pattern(/^[0-9]+$/) */
    .required(),
  favorite: Joi.boolean().optional(),
});

const schemaUpdateContact = Joi.object({
  name: Joi.string().min(3).max(30).optional(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .optional(),

  phone: Joi.string().min(9).max(15).optional(),
  favorite: Joi.boolean().optional(),
}).or("name", "email", "phone", "favorite");

const schemaUpdateStatusContact = Joi.object({
  favorite: Joi.boolean().required(),
});

const validate = async (schema, obj, next) => {
  try {
    await schema.validateAsync(obj);
    return next();
  } catch (err) {
    console.log(err);
    next({ status: 400, message: err.message });
  }
};
module.exports = {
  validationAddContact: async (req, res, next) => {
    return await validate(schemaAddContact, req.body, next);
  },
  validationUpdateContact: async (req, res, next) => {
    return await validate(schemaUpdateContact, req.body, next);
  },
  validatationUpdateStatusContact: async (req, res, next) => {
    return await validate(schemaUpdateStatusContact, req.body, next);
  },
  validationId: async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.contactId)) {
      return next({ status: 400, message: "Invalid ObjectId" });
    }
    next();
  },
};
