import { Injectable, NotFoundException, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Admin, UpdateAdminInput } from './entities/admin.entity';



@Injectable()
export class AdminService{
    constructor(@InjectRepository(Admin) private readonly adminRepository:Repository<Admin>){}

    async getAdminsInfo(){
        return await this.adminRepository.find();
    }

    async getAdminInfo(id){
        let admin = await this.adminRepository.findOne({where:{id:id}});
        if(!admin){
            throw new NotFoundException(`${id} is not existing in database `)
        }
        return admin;
    }

    async deleteAdmin(id){
        let admin = await this.adminRepository.findOne({where:{id:id}});
        if(!admin){
            throw new NotFoundException(`${id} admin not existing in database for Deletion`);
        }
        if(await this.adminRepository.delete(id)){
            return `${id} user deleted successfully`;
        }
    }

    async createNewAdmin(data:Admin) :Promise<Admin>{
        let admin = await this.adminRepository.create(data);
        if(data.password){
            const salt = await bcrypt.genSalt(10);
            const hash =  await bcrypt.hash(data.password, salt);
            admin.password = hash;
        }
        //Object.assign(admin,data);
        return await this.adminRepository.save(admin);
    }

    async updateAdmin(id:number,data:UpdateAdminInput){
        let admin = await this.adminRepository.findOne({where:{id:id}});
        if(!admin){
            throw new NotFoundException(`${id} admin does not exist`);
        }
        if(data.password){
            const salt = await bcrypt.genSalt(10);
            const hash =  await bcrypt.hash(data.password, salt);
            data.password = hash;
        }
        Object.assign(admin,data);
        await this.adminRepository.save(admin);
        return admin;
    }
} 