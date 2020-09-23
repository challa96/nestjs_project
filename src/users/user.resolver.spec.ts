import { Test } from "@nestjs/testing";
import { TestingModule } from "@nestjs/testing/testing-module";
import { UserResolver } from "./user.resolver";
import {UserService } from "./user.service";

describe('User Resolver',() => {
    let testingModule: TestingModule;
    let userResolver :  UserResolver;
    let userSerVice  : UserService;

   /*  beforeEach(async () => {
        testingModule = await Test.createTestingModule({
            providers:[{
                provide:UserService,
                useFactory () =>{

                }
            }]
        })      
    }).compile(); */
})