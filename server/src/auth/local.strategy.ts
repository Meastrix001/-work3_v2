import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "./auth.service"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super() //config for google, facebook etc login method/strategy: http://www.passportjs.org/packages/
  }


  //check if user exists & if password & email match a existing user
  async validate(email: string, password: string): Promise<any> {

    // run validate user auth.service to check the credentials
    const user = await this.authService.validateUser(email, password)
    //if user doesnt exist && wrong creds
    if (!user) {
      throw new UnauthorizedException();
    }
    // if user exists return user
    // this return ends up in request object (here 'user' === 'req') and req has a object called 'user'
    // the return goes back to app.controller.ts
    return user;
  }
}