import { Field, Int, ObjectType, Float } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class UserData {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  picture: string;

  @Column()
  @Field()
  devType: string;

  @Column()
  @Field()
  role: string;

  @Column()
  @Field()
  owner_id: string;

}
