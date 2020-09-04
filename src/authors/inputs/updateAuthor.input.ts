import { InputType, Field} from '@nestjs/graphql';

@InputType()
export class UpdateAuthor{
    @Field({nullable:true})
        readonly name:string
    @Field({nullable:true})
        readonly age:number
}