import { Router } from "express";

import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middlewares";
import { updateUserReq, userCreateSchema } from "../schemas";
import ensureEmailExistsMiddleware from "../middleware/ensureEmailExists.middleware";
import ensureTokeValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers";
import ensureUserExistsMiddleware from "../middleware/ensureUserExists.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userCreateSchema),
  ensureEmailExistsMiddleware,
  createUserController
);

userRoutes.get("", ensureTokeValidMiddleware, listUsersController);
userRoutes.patch(
  "",
  ensureTokeValidMiddleware,
  ensureUserExistsMiddleware,
  ensureDataIsValidMiddleware(updateUserReq),
  ensureEmailExistsMiddleware,
  updateUserController
);
userRoutes.delete(
  "",
  ensureTokeValidMiddleware,
  ensureUserExistsMiddleware,
  deleteUserController
);

export { userRoutes };
