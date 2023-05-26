import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { tContactReturn, tContactUpdate, tUserUpdate } from "../../interfaces";
import { contactReturnSchema } from "../../schemas";
import { AppError } from "../../errors";

const updateContactService = async (
  contactData: tUserUpdate,
  updateId: number,
  userId: number
): Promise<tContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const oldData = await contactRepository.findOne({
    relations: {
      user: true,
    },
    where: {
      id: updateId,
    },
  });

  if (oldData?.user.id !== user?.id) {
    throw new AppError("Insufficient permission", 403);
  }

  const contact: tContactUpdate = contactRepository.create({
    ...oldData,
    ...contactData,
  });

  await contactRepository.save(contact);

  const newContact = contactReturnSchema.parse(contact);

  return newContact;
};

export default updateContactService;
