import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { tContactReq, tContactReturn } from "../../interfaces";
import { contactReturnSchema } from "../../schemas";
import { AppError } from "../../errors";

const createContactService = async (
  contactData: tContactReq,
  userId: number
): Promise<tContactReturn> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const contact: Contact = contactRepository.create({
    ...contactData,
    user: findUser!,
  });

  await contactRepository.save(contact);

  const newUser = contactReturnSchema.parse(contact);

  return newUser;
};

export default createContactService;
