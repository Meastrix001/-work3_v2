import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserDataInput } from './dto/create-user-data.input';
import { UpdateUserDataInput } from './dto/update-user-data.input';
import { UserData } from './entities/user-data.entity'

@Injectable()
export class UserDataService {
  constructor(@InjectRepository(UserData) private UserDataRepository: Repository<UserData>) { }

  create(createUserDataInput: CreateUserDataInput) {
    const newUserData = this.UserDataRepository.create(createUserDataInput)
    return this.UserDataRepository.save(newUserData);
  }

  findAll() {
    return `This action returns all userData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDatum`;
  }

  update(id: number, updateUserDataInput: UpdateUserDataInput) {
    return `This action updates a #${id} userDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDatum`;
  }
}
