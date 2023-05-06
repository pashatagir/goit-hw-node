const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  if (favorite) {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit: Number(limit),
    })
      .populate("owner", "name")
      .all("favorite", favorite);
    res.json(result);
  }
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "name");
  res.json(result);
};

module.exports = listContacts;
