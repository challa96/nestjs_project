import { Field, ObjectType, Int, InputType, HideField, PartialType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column,Entity, OneToMany, ManyToOne} from 'typeorm';
//import { UserDto } from '../dto/userdto';
import { IsNotEmpty, MinLength, IsEmail, IsString, IsBoolean, IsDate } from 'class-validator';
import { UserInput } from '../inputs/create.user-input';


@Entity({
    name:'users',
    orderBy:{id:"ASC"}
})
@InputType('UserInput')
@ObjectType('UserEntity')
export class User{
    @Field(type=>Int,{nullable:true})
    @PrimaryGeneratedColumn({
        type:"bigint"
    })
    id:number;

    @Field(type=>String, {nullable:true})
    @Column({
        type:"varchar",
        length:255,
        name:"client_id",
        nullable:true
    })
    client_id?:string;

    @Field(type=>Boolean,{nullable:true})
    @Column({
        name:'active',
        type:"boolean",
        default:false,
        //nullable:true
    })
    active:boolean;

    @Field(type=>String,{nullable:true})
    @Column({
        name:"title",
        type:"varchar",
        length:255,
        nullable:true
    })
    title?:string;

    @Field(type=>String, {nullable:true})
    @Column({
        type:"varchar",
        length:255,
        name:"first_name",
        nullable:true
    })
    first_name?:string;

    @Field(type=> String, {nullable:true})
    @Column({
        type:"varchar",
        length:255,
        name:"last_name",
        nullable:true
    })
    last_name?:string;

    @IsEmail()
    @IsNotEmpty()
    @Field(type=>String, {nullable:true})
    @Column({
        type:"varchar",
        length:255,
        name:"email",
        unique:true,
        nullable:false
    })
    email:string;

    @Field(type=>String ,{nullable:true})
    @Column({
        type:"varchar",
        length:255,
        name:"phone",
        nullable:true
    })
    phone?:string;

    @Field(type=>Number, {nullable:true})
    @Column({
        type:"int",
        name:"transactions",
        nullable:true
    })
    transactions?:number;

    @IsNotEmpty()
    @IsString()
    @Field(type=>String)
    @Column({
        type:"varchar",
        nullable:false,
        name:"tier",
        length:255
    })
    tier:string='ap';

    //can throw error if lsat seen is null TODO
    @Field(type=>Date,{nullable:true})
    @Column({
        name:"last_seen",
        type:"timestamp without time zone",
        nullable:true
    })
    last_seen?:Date;

    @IsNotEmpty()
    @MinLength(8)
    @HideField()    
    @Field(type=>String)
    @Column({
        name:"password",
        type:"varchar",
        length:255,
        nullable:false
    })
    password:string;

    //can throw error if lsat seen is null TODO
    @IsNotEmpty()
    @IsDate()
    @Field(type=>Date,{nullable:true})
    @Column({
        name:"inserted_at",
        type:"timestamp without time zone",
        nullable:false,
        default:()=>'NOW()'
    })
    inserted_at:Date;

    //can throw error if lsat seen is null TODO
    @IsNotEmpty()
    @IsDate()
    @Field(type=>Date,{nullable:true})
    @Column({
        name:"updated_at",
        type:"timestamp without time zone",
        nullable:false,
        default:()=>'NOW()'
    })
    updated_at:Date;

    @Field(type=>String,{nullable:true})
    @Column({
        name:"provider",
        type:"varchar",
        length:255,
        default:"password",
        nullable:true
    })
    provider:string;
 
    @Field(()=> [RecentViewed], {nullable:true})
    @Column({
        name:"recent_viewed",
        type:"jsonb",
        default: () => "'[]'",
        nullable:true
    })
    //  @Reflect.metadata(Object,UserProductDto)
    recent_viewed?:RecentViewed[];

    @Field(()=>[Favourites],{nullable:true})
    @Column({
        type:"jsonb",
        name:"favourites",
        default: () => "'[]'",
        nullable:true

    })
    favourites?:Favourites[];

    @Field(()=>[ProductsSavedForLater],{nullable:true})
    @Column({
        name:"products_saved_for_later",
        type:'jsonb',
        default: () => "'[]'",
        nullable:true
    })
    products_saved_for_later?:ProductsSavedForLater[]; 

    @Field(type=>Boolean,{nullable:true})
    @Column({
        name:"is_alliance",
        type:"boolean",
        default:false,
        //nullable:true

    })
    is_alliance:boolean;

    @Field(type=>String,{nullable:true})
    @Column({
        name:"alliance_id",
        type:"varchar",
        length:255,
        nullable:true

    })
    alliance_id?:string;

    @Field(type=>String,{nullable:true})
    @Column({
        name:"oauth_id",
        type:"varchar",
        length:255,
        nullable:true

    })
    oauth_id?:string;

    @Field(type=>String,{nullable:true})
    @Column({
        type:"varchar",
        length:11,
        name:"phone_country_code",
        nullable:true

    })
    phone_country_code?:string;

    @Field(type=>Number,{nullable:true})
    @Column({
        name:"city_id",
        type:"int",
        nullable:true

    })
    city_id?:number;

    @Field(type=>Number,{nullable:true})
    @Column({
        name:"country_id",
        type:"int",
        nullable:true

    })
    country_id?:number;

    @Field(type=>Boolean, {nullable:true})
    @Column({
        name:"news_letter_subscribed",
        type:"boolean",
        nullable:true

    })
    news_letter_subscribed?:boolean;

    @Field(type=>String, {nullable:true})
    @Column({
        name:"vat_number",
        type:"varchar",
        length:255,
        nullable:true

    })
    vat_number?:string;

    @Field(type=>Date, {nullable:true})
    @Column({
        name:"vat_registration_date",
        type:"date",
        nullable:true

    })
    vat_registration_date?:Date; 


}

@ObjectType('RecentViewed')
@InputType('RecentViewedInput')
export class RecentViewed{
    @Field(tyep=>Int ,{nullable:true})
    id:number;

    @Field(type=>String, {nullable:true})
    type:string;
}

@ObjectType('Favourites')
@InputType('FavouritesInput')
export class Favourites{
    @Field(type=>Int,{nullable:true})
    id:number;

    @Field(type=>String,{nullable:true})
    type:string;
}

@ObjectType('ProductsSavedForLater')
@InputType('ProductsSavedForLaterInput')
export class ProductsSavedForLater {
    @Field(type => Int, {nullable:true})
  product_id: number;

  @Field(type => Int, {nullable:true})
  size_id: number;

  @Field(type => Int, {nullable:true})
  color_id: number;

  @Field(type => Int, {nullable:true})
  amount: number;
}


@InputType('UpdateUserInput')
export class UpdateUserInput extends PartialType(User, InputType){}


