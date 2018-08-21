import { Component, OnInit } from '@angular/core';
import { Settings } from "../../services/settings.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  dockSize: number[];
  docknumber: number;

  constructor(private appSettings: Settings) {}

  ngOnInit() {
    let dockMax = +this.appSettings.numberofcards_max;
    let dockMin = +this.appSettings.numberofcards_min;
    this.docknumber = dockMin;
    if(dockMax > dockMin){
      this.dockSize = this.RangeFill(dockMin,dockMax);
    }else{
      this.dockSize = this.RangeFill(3,10);
    }
    
  }

  RangeFill(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }

  StartGame(){
    console.log(this.docknumber);
  }
}
