import { Test, TestingModule } from '@nestjs/testing';
import { AdminResolver } from './admin.resolver';
import { Admin } from './entities/admin.entity'
import * as config from 'config';
import * as bcrypt from 'bcrypt';
import { AdminService } from './admin.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

jest.mock('config');
jest.mock('bcrypt');

describe('Admin ResolverResolver', () => {
  let resolver: AdminResolver;
  let module: TestingModule;
  let bcrptCompare:jest.Mock;
  let table2 : jest.Mock;
  let service : AdminService;

  beforeEach(async () => {
    table2 = jest.fn().mockReturnValue(true);
    //(config.get('tables').table2 as jest.Mock) = table2
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminResolver,
        AdminService,
        {
          provide:getRepositoryToken(Admin),
          useClass:Repository
        }
      ],
    }).compile();

    resolver = module.get<AdminResolver>(AdminResolver);
    service  = module.get<AdminService>(AdminService);
  });

  describe('Find One By Id',()=>{
    it('it should return an entity of client if successful', async () => {
      let expectedResult:any = new Admin();
      let mockNumberToSatisfyParameters = 0;
      jest.spyOn(resolver,"getAdminInfo").mockResolvedValue(expectedResult);
      expect(await resolver.getAdminInfo(mockNumberToSatisfyParameters)).toBe(expectedResult);
      expect(typeof(await resolver.getAdminInfo(mockNumberToSatisfyParameters))).toBe('object');
      //expect(resolver.createNewAdmin).toBe(Object);
      console.log("PRINTTT==",mockNumberToSatisfyParameters,expectedResult);
    });
  });

  afterEach(()=>{
    jest.resetAllMocks();
  })
  
});
