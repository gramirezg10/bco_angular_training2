import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = '2020';
  author = 'Germán Ramírez Gaviria';
  @Input() msg:string
  @Output() msgToFather = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    // this.msgToFather.emit('Primer proyecto de Angular!');
  }

  replyToFather(){
    this.msgToFather.emit('Message from son');
  }

}
