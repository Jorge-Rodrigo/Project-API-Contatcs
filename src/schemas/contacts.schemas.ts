import validator from "validator";
import { z } from "zod";

const contactCreateSchema = z.object({
  fullName: z.string().max(150).min(4),
  email: z.string().email().max(45),
  phoneNumber: z.string().refine(validator.isMobilePhone),
});

const contactReturnSchema = contactCreateSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const updateContactReq = contactCreateSchema
  .partial()
  .refine(
    ({ fullName, email, phoneNumber }) =>
      fullName !== undefined ||
      email !== undefined ||
      phoneNumber !== undefined,
    {
      message: "One of the fields must be defined",
      path: ["fullName, email or phoneNumber"],
    }
  );

const returnAllContacts = contactReturnSchema.array();

export {
  contactCreateSchema,
  contactReturnSchema,
  updateContactReq,
  returnAllContacts,
};
