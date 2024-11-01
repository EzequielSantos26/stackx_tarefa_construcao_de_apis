import Joi from "joi";

const PersonSchema = Joi.object({
  name: Joi.string().min(6).max(30).required(),

  gender: Joi.string().min(6).max(30).required(),

  ethnicity: Joi.string().min(6).max(30).required(),

  nationality: Joi.string().min(6).max(30).required(),

  personality: Joi.string().min(6).max(80).required(),
});

export default PersonSchema
