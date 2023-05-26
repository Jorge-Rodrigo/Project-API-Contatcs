import { MigrationInterface, QueryRunner } from "typeorm";

export class phoneNumberTypeOnContacts1685125802233 implements MigrationInterface {
    name = 'phoneNumberTypeOnContacts1685125802233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" integer NOT NULL`);
    }

}
