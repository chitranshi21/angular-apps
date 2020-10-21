import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ name: string, status: string }>();
  serverName: string
  isServerCreated:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  createServer() {
    this.isServerCreated = true;
    this.serverCreated.emit({
      name: this.serverName,
      status: Math.random() > 0.5 ? 'online' : 'offline'
    });
  }


}
