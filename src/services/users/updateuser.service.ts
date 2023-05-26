import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tUserReturnWithoutPass, tUserUpdate } from "../../interfaces";
import { returnUserSchemaWithoutPass } from "../../schemas";

const updateUserService = async (
  userData: tUserUpdate,
  updateId: number
): Promise<tUserReturnWithoutPass> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData = await userRepository.findOneBy({
    id: updateId,
  });

  const user: tUserUpdate = userRepository.create({
    ...oldData,
    ...userData,
  });

  await userRepository.save(user);

  const newUser = returnUserSchemaWithoutPass.parse(user);

  return newUser;
};

export default updateUserService;
