import { InputType, Field, Int } from '@nestjs/graphql';
 
@InputType()
export class OptionsInput{
    @Field(type=>Boolean,{nullable:true})
    read_only:boolean;

    @Field({nullable:true})
    country:string

    @Field(type=>[Int],{nullable:true})
    srore_ids:[];
}



@InputType()
export class OrdersInput{
    @Field(type=>Boolean,{nullable:true})
    active:boolean;

    @Field(tyep=>OptionsInput,{nullable:true})
    options:OptionsInput;
}

@InputType()
export class AdminPermissionInput{
    @Field(type=>OrdersInput)
    orders:OrdersInput;
}