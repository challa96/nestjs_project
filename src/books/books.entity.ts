import { Entity ,PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { AuthorEntity } from  '../authors/author.entity';
//import { ObjectType } from '@nestjs/graphql';

@Entity('book_new')
export class BookEntity{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"name"})
    name:string;

    @Column({name:"genre"})
    genre:string;    

    @Column({name:"authorId", nullable:true})
    authorId?:number;



    //@ManyToOne(type=>AuthorEntity, author => author.id)
    @ManyToOne(type=>AuthorEntity, author => author.books)
    @JoinColumn({name:"authorId",referencedColumnName:'id'})
        author:AuthorEntity
    // @JoinColumn({name:"id"})
    // author:AuthorEntity
}