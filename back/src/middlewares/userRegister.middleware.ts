import { NextFunction, Request, Response } from "express";
import { checkUserExists } from "../services/user.service";
import { ClientError } from "../utils/errors";

const validateUserRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, name, address, phone } = req.body;
  if (!email || !password || !name || !address || !phone)
    next(new ClientError("Faltan campos por completar"));
  else next();
};

const validateUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  if (await checkUserExists(email))
    next(new ClientError("El usuario ya existe", 400));
  else next();
};

export default [validateUserRegister, validateUserExists];
