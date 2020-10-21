import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: { name: string, status: string }[] = [];
  
  onAddServer(server: { name: string, status: string }) {
    this.servers.push(server);
  }
}
