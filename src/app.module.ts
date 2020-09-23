import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AdminModule } from './admins/admin.module';
import * as typeOrmConfig from './config/typeorm.config';

@Module({
  imports: [
      GraphQLModule.forRoot({
        //autoSchemaFile:'schema.gpl',
        autoSchemaFile:true,
        playground:true,
        path:'/api/users/',
        context: ({ req }) => ({ req })
      }),
      TypeOrmModule.forRoot(typeOrmConfig),
      UserModule,
      AdminModule
  ]
})
export class AppModule {}
