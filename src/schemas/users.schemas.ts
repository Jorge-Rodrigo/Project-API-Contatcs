import { z } from "zod";
import validator from "validator";

const userCreateSchema = z.object({
  fullName: z.string().max(150).min(4),
  email: z.string().email().max(45),
  password: z.string().max(120),
  phoneNumber: z.string().refine(validator.isMobilePhone),
});

const userReturnSchema = userCreateSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const updateUserReq = userCreateSchema
  .partial()
  .refine(
    ({ fullName, email, password, phoneNumber }) =>
      fullName !== undefined ||
      email !== undefined ||
      password !== undefined ||
      phoneNumber !== undefined,
    {
      message: "One of the fields must be defined",
      path: ["fullName, email, password or phoneNumber"],
    }
  );

const returnUserSchemaWithoutPass = userReturnSchema.omit({ password: true });
const returnAllUsers = returnUserSchemaWithoutPass.array();

export {
  userCreateSchema,
  userReturnSchema,
  returnUserSchemaWithoutPass,
  returnAllUsers,
  updateUserReq,
};
