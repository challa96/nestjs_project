import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyJsonbArrayFieldsToJsonBInUsers1600755111046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE users ADD recent_viewed1 jsonb DEFAULT \'[]\'::jsonb');
        await queryRunner.query('UPDATE  users SET recent_viewed1 = to_jsonb(recent_viewed)');
        await queryRunner.query('ALTER TABLE users DROP COLUMN recent_viewed');
        await queryRunner.query('ALTER TABLE users rename recent_viewed1 to recent_viewed');


        await queryRunner.query('ALTER TABLE users ADD favourites1 jsonb DEFAULT \'[]\'::jsonb');
        await queryRunner.query('UPDATE users SET favourites1 = to_jsonb(favourites)');
        await queryRunner.query('ALTER TABLE users DROP COLUMN favourites');
        await queryRunner.query('ALTER TABLE users rename favourites1 to favourites');


        await queryRunner.query('ALTER TABLE users ADD products_saved_for_later1 jsonb DEFAULT \'[]\'::jsonb');
        await queryRunner.query('UPDATE users SET products_saved_for_later1 = to_jsonb(products_saved_for_later)');
        await queryRunner.query('ALTER TABLE users DROP COLUMN products_saved_for_later');
        await queryRunner.query('ALTER TABLE users rename products_saved_for_later1 to products_saved_for_later');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE users ADD recent_viewed1 jsonb[] default ARRAY[]::jsonb[];");
        await queryRunner.query("update  users SET recent_viewed1 = ARRAY[recent_viewed];");
        await queryRunner.query("ALTER TABLE users DROP COLUMN recent_viewed;");
        await queryRunner.query("ALTER TABLE users rename recent_viewed1 to recent_viewed;");


        await queryRunner.query('ALTER TABLE users add favourites1 jsonb[] deafult ARRAY[]::jsonb[]')
        await queryRunner.query('UPDATE users SET favourites1 = ARRAY[favourites]');
        await queryRunner.query('ALTER TABLE users DROP COLUMN favourites');
        await queryRunner.query('ALTER TABLE users rename favourites1 to favourites');

        
        await queryRunner.query('ALTER TABLE users ADD products_saved_for_later1 jsonb[] DEFAULT ARRAY[]::jsonb[]');
        await queryRunner.query('UPDATE users SET products_saved_for_later1 = ARRAY[products_saved_for_later]');
        await queryRunner.query('ALTER TABLE users DROP COLUMN products_saved_for_later');
        await queryRunner.query('ALTER TABLE users rename products_saved_for_later1 to products_saved_for_later');
    }

}
