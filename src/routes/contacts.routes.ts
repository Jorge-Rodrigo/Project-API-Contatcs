import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
} from "../controllers";
import ensureTokeValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middlewares";
import { contactCreateSchema, updateContactReq } from "../schemas";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureTokeValidMiddleware,
  ensureDataIsValidMiddleware(contactCreateSchema),
  createContactController
);
contactsRoutes.get("", ensureTokeValidMiddleware, listContactsController);
contactsRoutes.patch(
  "/:id",
  ensureTokeValidMiddleware,
  ensureDataIsValidMiddleware(updateContactReq),
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureTokeValidMiddleware,
  deleteContactController
);

export { contactsRoutes };
