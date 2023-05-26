import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tLoginReq } from "../../interfaces";
import { AppError } from "../../errors";

const createLoginService = async (loginData: tLoginReq): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!findUser) {
    throw new AppError("Invalid credentials", 401);
  }
  const passIsValid: boolean = await compare(
    loginData.password,
    findUser.password
  );

  if (!passIsValid) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      id: findUser.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: findUser.id.toString(),
    }
  );

  return token;
};
export default createLoginService;
