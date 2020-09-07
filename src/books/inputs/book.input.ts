import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class BookInput {
    @Field() 
        readonly name:string
    @Field() 
        readonly genre:string

    @Field()
        readonly authorId: number;    
        
    /* @Field()
        readonly authorId:number */
}