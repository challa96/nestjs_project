import { ObjectType, Field } from '@nestjs/graphql';
import { CreateBookDto } from 'src/books/models/create-book.model';
//import { BookEntity } from 'src/books/books.entity';

@ObjectType()
export class CreateAuthorDto{
    @Field()
        readonly id?:number ;
    @Field()
        readonly name:string;
    @Field()
        readonly age:number;

    @Field( type => [CreateBookDto])
       readonly getbooks?:CreateBookDto[];
        
   
}