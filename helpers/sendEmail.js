const sgMail = require("@sendgrid/mail");

const { BASE_URL } = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (userEmail, verificationToken) => {
  const email = {
    to: userEmail,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
    from: "agrosaz01@gmail.com",
  };
  await sgMail.send(email);

  return true;
};

module.exports = sendEmail;
