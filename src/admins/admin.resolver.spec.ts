import { Test, TestingModule } from '@nestjs/testing';
import { AdminResolver } from './admin.resolver';

describe('Admin.ResolverResolver', () => {
  let resolver: AdminResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminResolver],
    }).compile();

    resolver = module.get<AdminResolver>(AdminResolver);
  });
  describe('',()=>{
    it('it should insert new record in database ', () => {
      expect(resolver.createNewAdmin).toBe(Object);
    });
  });
});
