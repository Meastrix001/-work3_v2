import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Passport } from 'passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersResolver } from 'src/users/users.resolver'
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver'

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', //env
    signOptions: { expiresIn: '60s' }
  })],
  providers: [AuthService, AuthResolver, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
