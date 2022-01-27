import { Injectable, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    //create request for AuthGuard, this is something that isn't there, but passport expects it, so create one
    const ctx = GqlExecutionContext.create(context);

    //create request
    const request = ctx.getContext();

    //put the login args (email/password) in the request.body
    request.body = ctx.getArgs().loginUserInput;

    //return password
    return request;
  }
}