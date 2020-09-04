import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class AuthorEntity{
    @PrimaryGeneratedColumn()
        id:number

    @Column()
        name:string

    @Column()
        age:number

}