import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AdminModule } from './admins/admin.module';
import * as typeOrmConfig from './config/typeorm.config';
import * as config from "config";
import { formatError } from 'graphql';


let graphql = config.get('graphql')
@Module({
  imports: [
      GraphQLModule.forRoot({
        //autoSchemaFile:'schema.gpl',
        autoSchemaFile:true,
        playground:process.env.GRAPHQL_PLAYGROUND || graphql.playground,
        path:'/api/users/',
        context: ({ req }) => ({ req }),
        formatError(err){
          //console.log(err.extensions.exception.response.message);
          //console.log(err.extensions);
          return {
            path:err.path,
            name:err.message,
            statusCode:err.extensions.exception.status,
            message:err.extensions.exception.response.message.slice(0,3),
            stacktrace:err.extensions.exception.stacktrace
          };
        }
        //formatError(err) {
          //const originalError = err.originalError; // origin error
          //console.log(err); // print it out
          //return {
            //message: err.message,
            //path: err.path,
            //locations: err.locations,
            //stack: err.stack.split('\n'),
            //code: err.code,
            //prefix: err.prefix,
            //detail: err.detail
          //}
        //}
      }),
      TypeOrmModule.forRoot(typeOrmConfig),
      UserModule,
      AdminModule
  ]
})
export class AppModule {}
