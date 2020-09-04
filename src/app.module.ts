import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import DbConfig from './typeorm.config';
import { BookModule } from "./books/book.module";
import { AuthorModule } from "./authors/author.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl',
      debug:false,
      playground:true
    }),
    TypeOrmModule.forRoot(DbConfig),
    BookModule,
    AuthorModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
