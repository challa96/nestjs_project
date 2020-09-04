import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class UpdateAuthorDto{
    @Field()
        readonly id?:number
    @Field()
        readonly name:string
    @Field()
        readonly age:number
}