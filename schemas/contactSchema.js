const Joi = require("joi"); //module that helps with validation of data types received during a query
const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = { addSchema };
