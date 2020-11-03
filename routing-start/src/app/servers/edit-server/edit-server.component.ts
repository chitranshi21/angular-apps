import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { CanComponentDeactive } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactive {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  changeSaved = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }
  
  
  canDeactive(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.changeSaved) { 
      confirm("are you sure you want to move");
      return true;
    } return true;
  }

  ngOnInit() {
    this.server = this.serversService.getServer(this.route.snapshot.params.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
  }

}
