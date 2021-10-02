const Joi = require("joi");
let result = 10;

const schemaRegister = Joi.object({
  value: Joi.number().required().messages({
    "any.required": `El resultado es requerido`,
    "number.base": `El resultado debe ser númerico`,
    "string.empty": `El resultado es requerido`,
  }),
});
const calculatorController = {
  value(req, res) {
    res.json({
      message: "ok",
      data: result,
    });
  },

  save(req, res) {
    const { error } = schemaRegister.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    result = req.body.value;

    res.json({
      message: "ok",
      data: result,
    });
  },
};

module.exports = calculatorController;
