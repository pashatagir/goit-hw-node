const express = require("express");
const { ctrlContact } = require("../../controllers");
const { schemas } = require("../../models/contact");
const { validateBody, isValidId, auth } = require("../../middlewares");
const router = express.Router();

router.get("/", auth, ctrlContact.listContacts);

router.get("/:contactId", auth, isValidId, ctrlContact.getContactById);

router.post("/", auth, validateBody(schemas.addSchema), ctrlContact.addContact);

router.delete("/:contactId", auth, isValidId, ctrlContact.removeContact);

router.put(
  "/:contactId",
  auth,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlContact.updateContact
);

router.patch(
  "/:contactId/favorite",
  auth,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlContact.updateFavorite
);

module.exports = router;
