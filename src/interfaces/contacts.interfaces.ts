import { z } from "zod";
import {
  contactCreateSchema,
  contactReturnSchema,
  returnAllContacts,
} from "../schemas";
import { DeepPartial } from "typeorm";

type tContactReq = z.infer<typeof contactCreateSchema>;
type tContactReturn = z.infer<typeof contactReturnSchema>;
type tAllContactsReturn = z.infer<typeof returnAllContacts>;
type tContactUpdate = DeepPartial<tContactReq>;

export { tContactReq, tContactReturn, tAllContactsReturn, tContactUpdate };
