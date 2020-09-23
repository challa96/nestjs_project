import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { join } from 'path';

const dbConfig = config.get('db');

const typeOrmConfig:TypeOrmModuleOptions={
    type: dbConfig.type,
    host: process.env.DB_HOst || dbConfig.host,
    port: process.env.DB_PORT || dbConfig.port,
    username: process.env.DB_USERNAME || dbConfig.username,
    password: process.env.DB_PASSWORD || dbConfig.password,
    database: process.env.DB_DATABASE || dbConfig.database,
    logging:  process.env.DB_LOGGING  || dbConfig.logging,
    //entities: ['dist/**/*.entity{.ts,.js}'],
    entities: [__dirname + '/../**/*.entity{.js,.ts}'],
    synchronize: dbConfig.synchronize,
    migrations: [__dirname + '/../migrations/*{.js,.ts}'],
    migrationsRun: process.env.MIGRATION || dbConfig.migration,
    cli:{
        migrationsDir: 'src/migrations'
    }
}


module.exports = typeOrmConfig;