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
  currentTries = 0;
  imgSource: string;
  faceUpCardNumber = 1;
  isFaceUp = false;
  cardPair: Card[] = [];
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

  RandomImg(): object{
    let randomimage = this.appSettings.images[Math.floor(Math.random() * this.appSettings.images.length)];
    let imageUrl = `../../../assets/images/cards/${randomimage}.png`;
    return {imageUrl: imageUrl, id: randomimage};
  }

  StartGame(){
    console.log(this.decknumber);
    this.deckNgFor = this.RangeFill(1,((this.decknumber)*2));
    this.deckNgFor.map(x=>{
      let generateIMG = this.RandomImg();
      let card = {
        img: generateIMG["imageUrl"],
        id: generateIMG["id"],
        status: 0
      }
      this.cardCollection.push(card);
    })
    this.showGameBoard = true;
  }

  Flip(card){
    this.cardPair.push(card);
    this.faceUpCardNumber++;
    console.log(this.cardPair);
    if(this.faceUpCardNumber < 4){
      card.status = 1;
      if(this.faceUpCardNumber === 3){
        this.Evaluate();
        this.currentTries++;
      }
    }else{
      
    }
  }

  Evaluate(){
    if(this.cardPair[0].id === this.cardPair[1].id){
      this.cardPair[0].status = 2;
      this.cardPair[1].status = 2;
    }else{
      console.log("Nem egyformák");
    }
    this.cardPair = [];
    this.AllFlipOff();
  }

  AllFlipOff(){
    setTimeout(()=>{
      this.cardCollection.map(x=>{
        if(x.status == 1){
          x.status = 0;
        }
      });
      this.faceUpCardNumber = 1;
    },1000)
  }

}
