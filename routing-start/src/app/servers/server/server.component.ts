import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Server } from 'http';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:Data) => this.server = data.server)
  //   const id = +this.route.params['id'];
  //   this.server = this.serversService.getServer(id);
  //   this.route.params.subscribe(param =>
  //     this.server = this.serversService.getServer(+param['id']));
  }

}
