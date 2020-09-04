import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateBookDto{
    @Field()
        readonly id?:number
    @Field() 
        readonly name?:string
    @Field() 
        readonly genre?:string
}