import { InputType, Field, GraphQLISODateTime, Int, HideField } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsDate, IsDateString, IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { type } from 'os';
import { AdminPermissions } from '../entities/admin.entity';

@InputType()
export class AdminInput{

    @IsNotEmpty()
    @IsString()
    @Field(type=> String)
    first_name:string;

    @IsNotEmpty()
    @IsString()
    @Field(type => String)
    last_name:string;

    @IsNotEmpty()
    @IsEmail()
    @Field(type=>String)
    email:string;

    @IsOptional()
    @IsBoolean()
    @Field(type=>Boolean,{nullable:true})
    active:boolean;

    @IsNotEmpty()
    @IsString()
    @HideField()
    @MinLength(8)
    @Field(type=>String)
    password:string;

    @IsDate()
    @IsNotEmpty()
    @Field(type => GraphQLISODateTime)
    updated_at:Date;

    @IsDate()
    @IsNotEmpty()
    @Field(type => GraphQLISODateTime)
    inserted_at:Date;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Field(type=>String,{nullable:true})
    webhook_token:string;

    @IsOptional()
    @IsBoolean()
    @Field(type=>Boolean , {nullable:true})
    superadmin:boolean;

    @IsOptional()
    @IsArray()
    @Field(type=>[Int],{nullable:true})
    cities_area_ids:[]; 

    @IsOptional()
    @Field(type=>AdminPermissions,{nullable:true})
    permissions:AdminPermissions;
}