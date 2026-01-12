import Joi from "joi";

export const doctorProfileSchema = Joi.object({
  profilePicture: Joi.string().uri().optional(),

  specialties: Joi.array().items(Joi.string().trim().min(3)).min(1).required(),

  experienceYears: Joi.number().integer().min(0).max(60).required(),

  consultationFee: Joi.number().min(0).required(),

  about: Joi.string().trim().min(10).max(1000).required(),

  clinicAddress: Joi.string().trim().min(5).optional(),
});
