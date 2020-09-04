import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AutorResolver } from './author.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorEntity } from "./author.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([AuthorEntity])
    ],
    providers:[AuthorService,AutorResolver]
})

export class AuthorModule{}