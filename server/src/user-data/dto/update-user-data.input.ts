import { CreateUserDataInput } from './create-user-data.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDataInput extends PartialType(CreateUserDataInput) {
  @Field(() => Int)
  id: number;
}
