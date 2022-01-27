import { UsersModule } from 'src/users/users.module';
import { Module } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { UserDataResolver } from './user-data.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserData } from './entities/user-data.entity'


@Module({
  imports: [TypeOrmModule.forFeature([UserData]), UsersModule],
  providers: [UserDataResolver, UserDataService],
})
export class UserDataModule { }
