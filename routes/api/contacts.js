const express = require('express');
const { ctrlContact } = require('../../controllers');
const { schemas } = require('../../models/contact');
const { validateBody, isValidId } = require('../../middlewares');
const router = express.Router();

router.get('/', ctrlContact.listContacts);

router.get('/:contactId', isValidId, ctrlContact.getContactById);

router.post('/', validateBody(schemas.addSchema), ctrlContact.addContact);

router.delete('/:contactId', isValidId, ctrlContact.removeContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addSchema),
  ctrlContact.updateContact
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlContact.updateFavorite
);

module.exports = router;
