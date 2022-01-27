import { ObjectType, Field, Int, ArrayElement } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  desc: string;

  @Column()
  @Field()
  projectOwner: string;

  @Column()
  @Field()
  teamSizeReq: number

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  repository: string;

  @Column()
  @Field()
  createdOn: Date;

  @Column()
  @Field()
  startingOn: Date;

  @Column()
  @Field()
  endingOn: Date;
}
