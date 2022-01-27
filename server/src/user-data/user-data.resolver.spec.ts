import { Test, TestingModule } from '@nestjs/testing';
import { UserDataResolver } from './user-data.resolver';
import { UserDataService } from './user-data.service';

describe('UserDataResolver', () => {
  let resolver: UserDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDataResolver, UserDataService],
    }).compile();

    resolver = module.get<UserDataResolver>(UserDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
