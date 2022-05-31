import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  //selector: '[app-servers]',
  //selector:'.app-servers', // . in the beginging to select by class
  selector:'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'TestServer'
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

onCreateServer(){
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
}
onUpdateServerName(event: Event){
this.serverName = (<HTMLInputElement>event.target).value
// console.log(this.serverName)
}

}

