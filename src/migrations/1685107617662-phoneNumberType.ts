import { MigrationInterface, QueryRunner } from "typeorm";

export class phoneNumberType1685107617662 implements MigrationInterface {
    name = 'phoneNumberType1685107617662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phoneNumber" character(1) NOT NULL`);
    }

}
