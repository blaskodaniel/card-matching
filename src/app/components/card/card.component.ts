import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  imgSource: string;
  isFaceUp = false;

  constructor() { }

  ngOnInit() {
  }

  Flip(){
    this.isFaceUp = true;
  }

}
