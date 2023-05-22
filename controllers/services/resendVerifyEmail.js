const { httpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw httpError(404, "User not found");
  }
  if (user.verify) {
    throw httpError(400, "Verification has already been passed");
  }

  await sendEmail(email, user.verificationToken);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
