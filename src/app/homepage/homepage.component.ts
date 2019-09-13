import { Component, OnInit, NgModule } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text?: string;
  color?: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
    tile: Tile[] = [{text: 'One', cols: 2, rows: 2}];
    tiles: Tile[] = [
      {text: 'Two', cols: 1, rows: 2, color: 'red'},
      {text: 'Three', cols: 1, rows: 2, color: 'blue'},
      {text: 'Four', cols: 1, rows: 2, color: 'green'},
      {text: 'Five', cols: 1, rows: 2, color: 'yellow'},
    ];

}
