import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";
import { TransferStateService } from "../service/transfer-state.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private transferStateService: TransferStateService, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.me(); 
  }
}