import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserDataService } from './user-data.service';
import { UserData } from './entities/user-data.entity';
import { CreateUserDataInput } from './dto/create-user-data.input';
import { UpdateUserDataInput } from './dto/update-user-data.input';

@Resolver(() => UserData)
export class UserDataResolver {
  constructor(private readonly userDataService: UserDataService) { }

  @Mutation(() => UserData)
  createUserData(@Args('createUserDataInput') createUserDataInput: CreateUserDataInput) {
    return this.userDataService.create(createUserDataInput);
  }

  @Query(() => [UserData], { name: 'userData' })
  findAll() {
    return this.userDataService.findAll();
  }

  @Query(() => UserData, { name: 'userData' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userDataService.findOne(id);
  }

  @Mutation(() => UserData)
  updateUserData(@Args('updateUserDataInput') updateUserDataInput: UpdateUserDataInput) {
    return this.userDataService.update(updateUserDataInput.id, updateUserDataInput);
  }

  @Mutation(() => UserData)
  removeUserData(@Args('id', { type: () => Int }) id: number) {
    return this.userDataService.remove(id);
  }
}
