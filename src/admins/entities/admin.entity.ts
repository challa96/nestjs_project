import { Field, GraphQLISODateTime, HideField, InputType, Int, ObjectType, PartialType } from '@nestjs/graphql';
import { PrimaryColumn, Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsArray, IsBoolean, IsDate, IsDateString, IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { AdminInput } from '../inputs/admin.input';

@Entity({
    name:'admins',
    orderBy:{id:'ASC'}
})
@InputType('AdminInput')
@ObjectType('AdminEntity')
export class Admin{
    @Field(type =>Int,{nullable:true})
    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    id:number;

    @IsNotEmpty()
    @IsString()
    @Field(type => String)
    @Column({
        name:'first_name',
        type:'varchar',
        length:255,
    })
    first_name:string;

    @IsNotEmpty()
    @IsString()
    @Field(type => String)
    @Column({
        name:'last_name',
        type:'varchar',
        length:255
    })
    last_name:string;

    @IsNotEmpty()
    @IsEmail()
    @Field(type =>String)
    @Column({
        name:'email',
        type:'varchar',
        unique:true,
        length:255
    })
    email:string;

    @IsOptional()
    @IsBoolean()
    @Field(type =>Boolean)
    @Column({
        name:'active',
        type:'boolean',
        default:true,
        nullable:true
    })
    active:boolean;

    @IsNotEmpty()
    @IsString()
    @HideField()
    @MinLength(8)
    @Field(type => String)
    @Column({
        name:'password',
        type:'varchar',
        length:255,
    })
    password:string;

    @IsDate()
    @IsNotEmpty()
    @Field(type => GraphQLISODateTime)
    @Column({
        name:'inserted_at',
        type:'timestamp without time zone'
    })
    inserted_at:Date;

    @IsDate()
    @IsNotEmpty()
    @Field(type => GraphQLISODateTime)
    @Column({
        name:'updated_at',
        type:'timestamp without time zone'
    })
    updated_at:Date;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @Field(type =>String ,{nullable:true})
    @Column({
        name:'webhook_token',
        type:'varchar',
        length:255,
        unique:true,
        nullable:true
    })
    webhook_token:string;

    @IsOptional()
    @IsBoolean()
    @Field(type=>Boolean , {nullable:true})
    @Column({
        name:'superadmin',
        type:'boolean',
        nullable:true
    })
    superadmin:boolean;

    @IsOptional()
    @Field(type=>AdminPermissions,{nullable:true})
    @Column({
        name:'permissions',
        type:'jsonb',
        nullable:true
    })
    permissions:AdminPermissions[]; 
   
    @IsOptional()
    @IsArray()
    @Field(type=>[Int],{nullable:true})
    @Column({
        name:'cities_area_ids',
        type:'integer',
        array:true,
        default:() => "'[]'",
        nullable:true
    })
    cities_area_ids:[]; 
}
 
@ObjectType()
@InputType('AdminPermissionInput')
export class AdminPermissions{
    @Field(type => Orders )
    orders:Orders[];
}
 


 @ObjectType()
 @InputType('OrdersInput')
export class Orders{
    @Field(type=>Boolean,{nullable:true})
    active:boolean;

    @Field(tyep=>Options,{nullable:true})
    options:Options[];
}



@ObjectType()
@InputType('OptionsInput')
export class Options{
    @Field(type=>Boolean,{nullable:true})
    read_only:boolean;

    @Field({nullable:true})
    country:string;

    @Field(type=>[Int],{nullable:true})
    srore_ids:[];
} 


@InputType('UpdateAdminInput')
export class UpdateAdminInput extends PartialType(Admin, InputType){}

