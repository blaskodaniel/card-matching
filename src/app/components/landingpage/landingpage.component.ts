import { Component, OnInit } from '@angular/core';
import { Settings } from "../../services/settings.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  deckSize: number[];
  decknumber: number;
  showGameBoard = false;

  constructor(private appSettings: Settings) {}

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

  StartGame(){
    this.showGameBoard = true;
  }
}
