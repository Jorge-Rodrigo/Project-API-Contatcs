import { MigrationInterface, QueryRunner } from "typeorm";

export class phoneNumberType1685107308097 implements MigrationInterface {
    name = 'phoneNumberType1685107308097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" integer NOT NULL`);
    }

}
