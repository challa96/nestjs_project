import { Mutation, Query, Args, Parent, Int, Resolver } from '@nestjs/graphql';
import { Admin, UpdateAdminInput } from './entities/admin.entity';
import { AdminService } from './admin.service';

//import { AdminInput } from './inputs/admin.input';


@Resolver(of=>Admin)
export class AdminResolver{
    constructor(private readonly adminService:AdminService){}

    @Query(()=>[Admin])
    async getAdminsInfo(){
        return await this.adminService.getAdminsInfo();
    }

    @Query(()=>Admin)
    async getAdminInfo(@Args('id') id:number){
        return this.adminService.getAdminInfo(id);
    }

    @Mutation(()=>String)
    async deleteAdmin(@Args('id') id:number){
        return this.adminService.deleteAdmin(id);
    }

    @Mutation(()=> Admin)
    async createNewAdmin(@Args('data') data:Admin){
        return await this.adminService.createNewAdmin(data);
    }

    @Mutation(()=> Admin)
    async updateAdmin(@Args('id') id:number,@Args('data') data:UpdateAdminInput){
        return await this.adminService.updateAdmin(id,data);
    }
}