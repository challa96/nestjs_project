import { Mutation,Query,ResolveField, Args, Resolver, Parent, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UpdateUserInput } from './entities/user.entity';
import { UserCredentials } from './inputs/user.credentials';
import { type } from 'os';

@Resolver(of=> User)
export class UserResolver{

    constructor (private readonly UserService:UserService){}

    @Query(()=>[User])
    async getUsers(){
        return await this.UserService.getUsers();
    }

   /*  @ResolveField()
    async user_product(@Parent() recently_viewed:UserProductDto){
        console.log("jsonb data==",recently_viewed);
    } */

    @Query(()=>User)
    async getUserById(@Args('id') uid:number){
        return this.UserService.getUserById(uid);
    }

    @Query(()=>User)
    async checkUserCredentials(@Args('data') data:UserCredentials){
        return await this.UserService.checkUserCredentials(data);
    }

    @Mutation(()=> User)
    async createUser(@Args('data') data:User){
        return await this.UserService.createUser(data)
    }

    @Mutation(()=>User)
    async updateUser(@Args('id') id:number,@Args("data") data:UpdateUserInput){
        return await this.UserService.updateUser(id,data);
    }

    @Mutation(() => String)
    async deleteUser(@Args('id') id:number){
        return await this.UserService.deteleUser(id);
    } 

}

