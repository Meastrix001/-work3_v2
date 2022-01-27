import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTeamInput {
  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  quote: string

  @Field()
  email: string

  @Field()
  devType: string

}
