import { Module,forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookResolver } from './book.resolver';
import { BookEntity } from './books.entity'
import { BookService } from './book.service';
import { AuthorModule } from 'src/authors/author.module';


@Module({
    imports:[TypeOrmModule.forFeature([BookEntity]),forwardRef(()=> AuthorModule)],
    providers:[BookResolver,BookService],
    exports:[BookService]
})

export class BookModule{}