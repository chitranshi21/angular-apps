import { Component, Input } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    @Input() server: { name: string, status: string };

    serverName:string;

    constructor() {
    }

    getServerStatus() {
        return this.server.status;
    }

    getColorOnStatus() {
        return this.server.status == 'online'? "aquamarine": "palevioletred";  
    }
}