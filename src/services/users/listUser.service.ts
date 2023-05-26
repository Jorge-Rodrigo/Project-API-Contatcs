import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tAllUsersReturn, tUserReturnWithoutPass } from "../../interfaces";
import { returnAllUsers, returnUserSchemaWithoutPass } from "../../schemas";
import { AppError } from "../../errors";

const listUsersService = async (
  userID: number
): Promise<tUserReturnWithoutPass> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: userID,
    },
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const users = returnUserSchemaWithoutPass.parse(findUser);

  return users;
};

export default listUsersService;
