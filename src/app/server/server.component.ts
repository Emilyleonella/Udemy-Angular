import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .Online{
        color: white;
    }
    `]

})
export class ServerComponent{

    serverId: number = 10; // you can write number infront to let you know what type of data it is
    serverStatus: string = 'offline'

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'Online' ? 'green' : 'red'
    }
}