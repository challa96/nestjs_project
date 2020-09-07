import { Module, forwardRef } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AutorResolver } from './author.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorEntity } from "./author.entity";
import { BookModule } from 'src/books/book.module';

@Module({
    imports:[
        TypeOrmModule.forFeature([AuthorEntity]),
        forwardRef(()=> BookModule)
    ],
    providers:[AuthorService,AutorResolver],
    exports:[AuthorService]
})

export class AuthorModule{}