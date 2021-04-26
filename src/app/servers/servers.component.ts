import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = ' '

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! mane is +this.serverName';
  }
  onUpdateServerName(event: any) {
     this.serverName = (<HTMLInputElement>event.target).value;
  }
  // onUpdateUserName(event: any) {
  //   this.userName =(<HTMLInputElement>event.target).value;
  //   // console.log(event);
  // }

  }

