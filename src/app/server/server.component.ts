import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'

})
export class ServerComponent{

    serverId: number = 10; // you can write number infront to let you know what type of data it is
    serverStatus: string = 'offline'

    getServerStatus(){
        return this.serverStatus;
    }
}