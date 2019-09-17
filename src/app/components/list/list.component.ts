import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public card: CardService) {}
  ngOnInit() {
  }
  tiles = this.card.tiles;
}
