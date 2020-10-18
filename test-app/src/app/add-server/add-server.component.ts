import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  serverName:String="";
  isServerCreated:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  createServer() {
    this.isServerCreated = true;
  }


}
