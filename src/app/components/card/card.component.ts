import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('imgSource') imgSource: string;
  @Input('status') status: number;
  isFaceUp = false;
  isEnd = false;

  constructor() {
    
  }

  ngOnInit() {
  }

  Flip(){
    this.isFaceUp = true;
  }

}
