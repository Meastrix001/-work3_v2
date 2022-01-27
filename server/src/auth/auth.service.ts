import { Injectable } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcryptjs'


@Injectable()

//auth service authenticates and validates a user
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email)

    // check if user exist and if password is correct
    // if user exits return user else return nothing
    // const result = await bcrypt.compare(password, user.password);

    if (user && password === user.password) {

      //get userObject, remove password from main object (for safety)
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(email: string) {
    // const payload = { email: user.email, sub: user.id }
    const user = await this.usersService.findOne(email)
    const { password, ...rest } = user
    return {
      access_token: this.jwtService.sign('jwt'),
      user: rest
    }
  }
}
