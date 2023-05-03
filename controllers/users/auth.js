const { User } = require("../../models");
const { ctrlWrapper } = require("../../helpers");

const register = async (req, res, error) => {
  const newUser = await User.create(req.body);
  res.status(201).json({ name: newUser.name, email: newUser.email });
};

module.exports = {
  register: ctrlWrapper(register),
};
