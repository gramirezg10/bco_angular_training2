import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller2';
  msgToSon = 'Curso de Angular 4!';
  msgFromSon: string;
  isMsgEnable: boolean = false;
  time: string = 'Mayo 2020'

  constructor(
    public router : Router
  ) {
    this.msgFromSon = '';
  }

  receiveMsg(event) {
    this.isMsgEnable = !this.isMsgEnable;
    this.msgFromSon = event;
  }

  navigate(){
    this.router.navigate(['/page2']);
  }
}
