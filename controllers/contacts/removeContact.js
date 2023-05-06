const { httpError } = require("../../helpers");
const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  if (!result) {
    throw httpError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = removeContact;
