import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    create(createUserInput: CreateUserInput) {
        const newUser = this.usersRepository.create(createUserInput)
        return this.usersRepository.save(newUser);
    }

    findAll() {
        return this.usersRepository.find();
    }

    findOne(email: string) {
        return this.usersRepository.findOne(email);
    }

    findOneByEmail(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne(email);
    }

    findByCred(email: string): Promise<User | undefined> {
        console.log(email)
        return this.usersRepository.findOne({ email: email });
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}