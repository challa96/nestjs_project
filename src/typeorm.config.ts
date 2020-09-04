import { TypeOrmModuleOptions } from '@nestjs/typeorm';


const DbConfig:TypeOrmModuleOptions={
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "User",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
}

export default DbConfig;