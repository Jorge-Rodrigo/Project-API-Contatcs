import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import {
  returnAllUsers,
  updateUserReq,
  userCreateSchema,
  userReturnSchema,
} from "../schemas";

type tUserReq = z.infer<typeof userCreateSchema>;
type tUserReturn = z.infer<typeof userReturnSchema>;
type tUserReturnWithoutPass = Omit<tUserReturn, "password">;
type tAllUsersReturn = z.infer<typeof returnAllUsers>;
type tUserUpdate = DeepPartial<tUserReq>;

export {
  tUserReq,
  tUserReturn,
  tUserReturnWithoutPass,
  tAllUsersReturn,
  tUserUpdate,
};
