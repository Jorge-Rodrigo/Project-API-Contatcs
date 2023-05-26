import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middlewares";
import { userCreateSchema } from "../schemas";
import ensureEmailExistsMiddleware from "../middleware/ensureEmailExists.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userCreateSchema),
  ensureEmailExistsMiddleware,
  createUserController
);

export { userRoutes };
