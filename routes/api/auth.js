const express = require("express");
const { authSchemas } = require("../../models");
const router = express.Router();
const { validateBody, auth, upload } = require("../../middlewares");
const { ctrlUser } = require("../../controllers");

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrlUser.register
);

router.get("/verify/:verificationToken", ctrlUser.verifyEmail);

router.post(
  "/verify",
  validateBody(authSchemas.verifyEmailSchema),
  ctrlUser.resendVerifyEmail
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
