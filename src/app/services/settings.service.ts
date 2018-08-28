import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Settings {
  numberofcards_max = 10;
  numberofcards_min = 3;
  images = ['webpack', 'ts', 'sass', 'supercharge', 'redux', 'react', 'd3', 'angular', 'jenkins', 'postcss'];
}
