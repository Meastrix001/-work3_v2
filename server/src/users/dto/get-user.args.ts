import { MinLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field({ nullable: false })
  email: string;
}