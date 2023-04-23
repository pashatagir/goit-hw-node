const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(
        res.status(400).json({
          message: error.message,
        })
      );
    }
    next(error);
  };
  return func;
};

module.exports = validateBody;
