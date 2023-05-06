const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const SUBSCRIPTION = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(emailRegexp)
    .required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...SUBSCRIPTION),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .pattern(emailRegexp)
    .required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...SUBSCRIPTION),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...SUBSCRIPTION)
    .required(),
});

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    token: { type: String, default: "" },
    subscription: {
      type: String,
      default: "starter",
      validate: {
        validator: (v) => SUBSCRIPTION.includes(v),
        message: (props) =>
          `'${props.value}' is not a valid type! Choose one of ${SUBSCRIPTION}`,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);
const authSchemas = { registerSchema, loginSchema, subscriptionSchema };

module.exports = { User, authSchemas };
