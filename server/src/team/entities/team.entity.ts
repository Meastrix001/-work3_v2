import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';


@Entity()
@ObjectType()
export class Team {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @IsEmail()
  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  quote: string;

  @Column()
  @Field()
  devType: string;

}
