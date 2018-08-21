import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Settings } from "../../services/settings.service";
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  deckSize: number[];
  decknumber: number;
  deckNgFor: number[];
  cardCollection: Card[] = [];
  showGameBoard = false;
  imgSource: string;
  faceUpCardNumber = 1;
  isFaceUp = false;
  @ViewChild('cardVar') cardVar: ElementRef<CardComponent>;

  constructor(private appSettings: Settings) {
    
  }

  ngOnInit() {
    let deckMax = +this.appSettings.numberofcards_max;
    let deckMin = +this.appSettings.numberofcards_min;
    this.decknumber = deckMin;

    if(deckMax > deckMin){
      this.deckSize = this.RangeFill(deckMin,deckMax);
    }else{
      this.deckSize = this.RangeFill(3,10);
    }
    
  }

  RangeFill(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }

  RandomImg(): string{
    let randomimage = this.appSettings.images[Math.floor(Math.random() * this.appSettings.images.length)];
    let imageUrl = `../../../assets/images/cards/${randomimage}.png`;
    return imageUrl;
  }

  StartGame(){
    console.log(this.decknumber);
    this.deckNgFor = this.RangeFill(1,((this.decknumber)*2));
    this.deckNgFor.map(x=>{
      let card = {
        img: this.RandomImg(),
        status: 0
      }
      this.cardCollection.push(card);
    })
    this.showGameBoard = true;
  }

  FlipCard(cardVar){
    console.log(cardVar.isEnd);
    if(this.faceUpCardNumber < 3){
      this.isFaceUp = true;
      this.faceUpCardNumber++;
    }
  }

}
