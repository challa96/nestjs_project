import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthorInput{
    @Field()
        readonly name:string
    @Field()
        readonly age:number
}