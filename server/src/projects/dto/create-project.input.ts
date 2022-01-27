import { InputType, Int, Field, ArrayElement } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  desc: string;

  @Field()
  projectOwner: string;

  @Field()
  teamSizeReq: number

  @Field()
  state: string;

  @Field()
  price: number;

  @Field()
  repository: string;

  @Field()
  createdOn: Date;

  @Field()
  startingOn: Date;

  @Field()
  endingOn: Date;

}
