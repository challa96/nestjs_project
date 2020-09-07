import { Entity, PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { BookEntity } from "../books/books.entity";
import { Field } from "@nestjs/graphql";


@Entity()
export class AuthorEntity{
    @PrimaryGeneratedColumn()
        id:number

    @Column()
        name:string

    @Column()
        age:number
    @OneToMany(type=>BookEntity,book=>book.author)  
        books: BookEntity[];


}