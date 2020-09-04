import { Entity ,PrimaryGeneratedColumn, Column } from 'typeorm';
//import { ObjectType } from '@nestjs/graphql';

@Entity('book_new')
export class BookEntity{
    @PrimaryGeneratedColumn({name:"id"})
    id:number;

    @Column({name:"name"})
    name:string;

    @Column({name:"genre"})
    genre:string;    

}