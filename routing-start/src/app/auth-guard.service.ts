import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): 
  Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // you want to redirect in case of false;
    // this.router.navigate(["/"]);
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | 
  Observable<boolean> | Promise<boolean>  {
   return this.canActivate(route, state);
  }

}
