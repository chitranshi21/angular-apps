import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [{
    name: "server 1",
    status: "online"
  },
  {
    name: "server 2",
    status: "offline"
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
