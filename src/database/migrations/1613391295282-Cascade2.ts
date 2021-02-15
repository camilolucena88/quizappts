import {MigrationInterface, QueryRunner} from "typeorm";

export class Cascade21613391295282 implements MigrationInterface {
    name = 'Cascade21613391295282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "options"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "options"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "questions"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "questions"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "activity"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "activity"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "answers"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "answers"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "client"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "client"."updatedAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "client"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "client"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "answers"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "answers"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "activity"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "activity"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "questions"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "questions"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "options"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "options"."createdAt" IS NULL`);
    }

}
