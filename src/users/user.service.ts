import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { User, UpdateUserInput } from './entities/user.entity';
import * as bcrypt  from 'bcrypt';
import { UserInput } from './inputs/create.user-input';
import { UserCredentials } from './inputs/user.credentials';

@Injectable()

export class UserService{
    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}

    async getUsers(){
        return await this.userRepository.find();
        //return await this.userRepository.find({take:1});
    }

    async comparePassword(pwd1,pwd2){       
        return await bcrypt.compare(pwd1,pwd2);

    }

    async checkUserCredentials(data:UserCredentials){
        let userDetails = await this.userRepository.find({email:data.email});
        if(userDetails.length == 0){
            throw new NotAcceptableException("Email id provieded is not existing");
        }

        //Note:: Do not chnage params First need to be plain text and second param should be hasded one .
        
        let password_compare_res =await this.comparePassword(data.password, userDetails[0].password);
        if(!password_compare_res){
            throw new NotAcceptableException("Password entred is not correct");
        }
        return userDetails[0];
    }

    async getUserById(id:number){
        const user = await this.userRepository.findOne({where:{id}});
        if(!user){
            throw new  NotFoundException('user does not exist');
        }
        return user;
        //return await this.userRepository.findOne({where:{id: id}});
        //return await this.userRepository.find({take:1});
    }

    async createUser(data:User) :Promise<User>{
        //let userDetails = new User();
        let userDetails = await this.userRepository.create(data);
        //userDetails.email = data.email;
        //userDetails.tier = data.tier;
        //userDetails.inserted_at = data.inserted_at;
        //userDetails.updated_at = data.updated_at;
        const salt = await bcrypt.genSalt(10);
        const hash =  await bcrypt.hash(userDetails.password, salt);
        userDetails.password = hash;
        //Object.assign(userDetails,data);
        return await this.userRepository.save(userDetails);
    }

    async updateUser(id:number,data:UpdateUserInput){
        let user = await this.userRepository.findOne({where:{id}});
        if(data.password){
            const salt =  await bcrypt.genSalt(10);
            const hash =  await bcrypt.hash(data.password, salt);
            data.password = hash
        }
        if(!user){
            throw new NotFoundException('User not available for updation');
        }
        /* if(data.recent_viewed){
            user = data.recent_viewed;


        } */
        Object.assign(user,data);
        return await this.userRepository.save(user);
        
    }

    async deteleUser(id:number):Promise<string>{
        let user = await this.userRepository.findOne({where:{id}});
        if(!user){
            throw new NotFoundException('UserId already Deleted');
        }
        await this.userRepository.delete(id);
        return `user ${id} sucessfully deleted`;
    }

}