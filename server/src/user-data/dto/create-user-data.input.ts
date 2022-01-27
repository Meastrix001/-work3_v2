import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDataInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  picture: string;

  @Field()
  devType: string;

  @Field()
  role: string;

  @Field()
  owner_id: string;

}
