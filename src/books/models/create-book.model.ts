import { ObjectType, Field } from '@nestjs/graphql';
import { CreateAuthorDto } from 'src/authors/dto/create-author.dto';


@ObjectType()
export class CreateBookDto{
    @Field()
       readonly id?:number
    @Field() 
       readonly name:string
    @Field() 
       readonly genre:string

   //  @Field()
   //    readonly authorId: number;   
     @Field(type=>CreateAuthorDto)
       readonly author?:CreateAuthorDto;

  
}