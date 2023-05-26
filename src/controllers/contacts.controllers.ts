import { Request, Response } from "express";
import {
  createContactService,
  deleteContactService,
  listContactsService,
  updateContactService,
} from "../services";

const createContactController = async (req: Request, res: Response) => {
  const newUser = await createContactService(req.body, req.user.id);

  return res.status(201).json(newUser);
};

const listContactsController = async (req: Request, res: Response) => {
  const contacts = await listContactsService(req.user.id);

  return res.status(200).json(contacts);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const contactId = parseInt(req.params.id);
  const newUser = await updateContactService(userData, contactId, req.user.id);

  return res.status(200).json(newUser);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const contactId = parseInt(req.params.id);
  const newUser = await deleteContactService(contactId, req.user.id);

  return res.status(200).send();
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
