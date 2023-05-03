const express = require("express");
const { authSchemas } = require("../../models");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const { ctrlUser } = require("../../controllers");

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrlUser.register
); //signup

module.exports = router;
