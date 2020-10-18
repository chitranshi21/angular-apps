import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

    serverName:string = "server 1";
    serverStatus:string = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColorOnStatus() {
        return this.serverStatus == 'online'? "aquamarine": "palevioletred";  
    }
}