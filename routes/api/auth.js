const express = require("express");
const { authSchemas } = require("../../models");
const router = express.Router();
const { validateBody, auth, upload } = require("../../middlewares");
const { ctrlUser, ctrlEmail } = require("../../controllers");

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrlUser.register
);

router.get("/verify/:verificationToken", ctrlEmail.verifyEmail);

router.post(
  "/verify",
  validateBody(authSchemas.verifyEmailSchema),
  ctrlEmail.resendVerifyEmail
);

router.post("/login", validateBody(authSchemas.loginSchema), ctrlUser.login);

router.get("/current", auth, ctrlUser.getCurrent);

router.post("/logout", auth, ctrlUser.logout);

router.patch(
  "/",
  auth,
  validateBody(authSchemas.subscriptionSchema),
  ctrlUser.updateSubscription
);

router.patch("/avatars", auth, upload.single("avatar"), ctrlUser.updateAvatar);

module.exports = router;
