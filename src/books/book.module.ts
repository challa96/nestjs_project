import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookResolver } from './book.resolver';
import { BookEntity } from './books.entity'
import { BookService } from './book.service';

@Module({
    imports:[TypeOrmModule.forFeature([BookEntity])],
    providers:[BookResolver,BookService]
})

export class BookModule{}