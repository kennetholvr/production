import { Component, OnInit, NgModule } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text?: string;
  color?: string;
  id?: string;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
    tiles: Tile[] = [
      {text: 'One', cols: 2, rows: 5, id: 'primaryCard'},
      {text: 'Two', cols: 1, rows: 2, id: 'secondCard'},
      {text: 'Three', cols: 1, rows: 2, id: 'thirdCard'},
      {text: 'Four', cols: 1, rows: 2, id: 'fourthCard'},
      {text: 'Five', cols: 1, rows: 2, id: 'fifthCard'},
    ];

}
