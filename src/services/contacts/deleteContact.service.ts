import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../errors";

const deleteContactService = async (
  updateId: number,
  userId: number
): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const contact = await contactRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      id: updateId,
    },
  });
  if (contact?.user.id !== user?.id) {
    throw new AppError("Insufficient permission", 403);
  }
  await contactRepository
    .createQueryBuilder("contacts")
    .delete()
    .from(Contact)
    .where("id = :id", { id: updateId })
    .execute();
};

export default deleteContactService;
