const express = require("express");
const { authSchemas } = require("../../models");
const router = express.Router();
const { validateBody, auth } = require("../../middlewares");
const { ctrlUser } = require("../../controllers");

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrlUser.register
); //signup

router.post("/login", validateBody(authSchemas.loginSchema), ctrlUser.login);

router.get("/current", auth, ctrlUser.getCurrent);

router.post("/logout", auth, ctrlUser.logout);

router.patch(
  "/",
  auth,
  validateBody(authSchemas.subscriptionSchema),
  ctrlUser.updateSubscription
);

module.exports = router;
