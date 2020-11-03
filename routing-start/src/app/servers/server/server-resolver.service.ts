import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';
interface Server {
  id: number,
  name: string,
  status: string
}
@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serverService:ServersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
    // you will get the routes here 
    // so you can use route.params.id to get the id in the route link
    return this.serverService.getServer(+route.params.id)
  }

}