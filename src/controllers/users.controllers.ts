import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
  return res.status(201).json("user Created");
};

export { createUserController };
