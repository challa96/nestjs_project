import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBook{
    @Field({nullable:true}) 
        readonly name:string;
    @Field({nullable:true}) 
        readonly genre:string;
        
     @Field({nullable:true})
         readonly authorId:number;
}