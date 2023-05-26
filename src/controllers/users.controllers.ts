import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listUsersService,
  updateUserService,
} from "../services";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await listUsersService(req.user.id);

  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const userId = req.user.id;
  const newUser = await updateUserService(userData, userId);

  return res.status(200).json(newUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.user.id;

  const newUser = await deleteUserService(userId);
  return res.status(204).send();
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
