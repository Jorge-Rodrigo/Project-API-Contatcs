import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReq, tUserReturnWithoutPass } from "../../interfaces";
import { returnUserSchemaWithoutPass } from "../../schemas";

const createUserService = async (
  userData: tUserReq
): Promise<tUserReturnWithoutPass> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserSchemaWithoutPass.parse(user);

  return newUser;
};

export default createUserService;
