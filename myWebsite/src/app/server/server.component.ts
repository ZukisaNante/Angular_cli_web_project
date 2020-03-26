import { Component } from '@angular/core';

@Component({
  // pass javascript in this component
selector: 'app-server',
templateUrl: './server.component.html'
})
// make it usable all over the web(outside)
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}