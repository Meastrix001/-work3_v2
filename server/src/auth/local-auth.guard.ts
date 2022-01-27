import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


// AuthGuard("local"), the given value in AuthGuard has to contain the strategy used, this can be for example google, facebook, twitter etc, local means our own local way/db
@Injectable()
// AuthGuard('local') will trigger the code presented inside the local.strategy.ts file
export class LocalAuthGuard extends AuthGuard('local') {

}