import { ObjectType, Field} from '@nestjs/graphql';
import { CreateBookDto } from 'src/books/models/create-book.model';

@ObjectType()
export class UpdateAuthorDto{
    @Field()
        readonly id?:number
    @Field()
        readonly name:string
    @Field()
        readonly age:number
    // @Field( type => [CreateBookDto])
    //     readonly getBooks?:CreateBookDto[];
}