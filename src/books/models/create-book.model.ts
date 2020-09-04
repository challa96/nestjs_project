import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class CreateBookDto{
    @Field()
       readonly id?:number
    @Field() 
       readonly name:string
    @Field() 
       readonly genre:string
}