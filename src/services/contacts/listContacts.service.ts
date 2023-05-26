import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { tAllContactsReturn } from "../../interfaces";
import { returnAllContacts } from "../../schemas";

const listContactsService = async (
  userID: number
): Promise<tAllContactsReturn> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContacts: Array<Contact> = await contactsRepository
    .createQueryBuilder("contacts")
    .where("contacts.user = :user", { user: userID })
    .getMany();

  const contacts = returnAllContacts.parse(findContacts);

  return contacts;
};

export default listContactsService;
