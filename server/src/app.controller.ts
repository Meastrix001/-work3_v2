import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  // Post / Login send a request to localhost:3000/login
  // run UseGuard to check the strategy
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(): any {

    // return request from local.strategy
    // get user object from the request (req.user)

  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user
  }
}
