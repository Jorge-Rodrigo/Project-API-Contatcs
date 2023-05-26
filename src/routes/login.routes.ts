import { Router } from "express";
import { createLoginSchema } from "../schemas";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middlewares";
import { createLoginController } from "../controllers";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);

export default loginRouter;
