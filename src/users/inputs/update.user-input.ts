import { Field,InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { GraphQLObjectType } from 'graphql';
//import { UserProductInput } from './user.products.input';


@InputType()
export class UpdateUserInput{

    @Field({nullable:true})
    client_id:string;

    @Field({nullable:true})
    active:boolean;

    @Field({nullable:true})
    title:string;

    @Field({nullable:true})
    first_name:string;

    @Field({nullable:true})
    last_name:string;

    @IsNotEmpty()
    @IsEmail() 
    @Field()
    email:string;

    @Field({nullable:true})
    phone:string;

    @Field({nullable:true})
    transactions:number;

    @IsNotEmpty()
    @IsString() 
    @Field()
    tier:string;

    @Field({nullable:true})
    last_seen?:Date;

    @IsNotEmpty()
    @MinLength(8) 
    @Field()
    password:string;

    @IsNotEmpty()
    @IsDate() 
    @Field()
    inserted_at?:Date;

    @IsNotEmpty()
    @IsDate() 
    @Field()
    updated_at:Date;

    @Field({nullable:true})
    provider?:string;

    /* @Field(()=> [UserProductInput],{nullable:true})
    recent_viewed?:GraphQLObjectType<UserProductInput>;

    @Field(()=> [UserProductInput],{nullable:true})
    favourites?:UserProductInput[];

    @Field(()=> [UserProductInput] ,{nullable:true})
    products_saved_for_later?:UserProductInput[];  */

    @Field({nullable:true})
    is_alliance?:boolean;

    @Field({nullable:true})
    alliance_id?:string;

    @Field({nullable:true})
    oauth_id?:string;

    @Field({nullable:true})
    phone_country_code?:string;

    @Field({nullable:true})
    city_id?:number;

    @Field({nullable:true})
    country_id?:number;

    @Field({nullable:true})
    news_letter_subscribed?:boolean;

    @Field({nullable:true})
    vat_number?:string;

    @Field({nullable:true})
    vat_registration_date?:Date;

}