import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { AdminResolver } from './admin.resolver';
import { AdminService } from './admin.service';




@Module({
    imports:[TypeOrmModule.forFeature([Admin])],
    providers:[AdminService,AdminResolver],
   
})

export class AdminModule{}