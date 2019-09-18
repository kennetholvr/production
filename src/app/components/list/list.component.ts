import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/services/responsive.service';

export interface Tile {
  cols: number;
  rows: number;
  text?: string;
  color?: string;
  id?: string;
  image?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public isMobile: Boolean;

  constructor(private responsiveService: ResponsiveService) { }
  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();

  }
  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 5, id: 'primaryCard', image: '../../../assets/home.png'},
    {text: 'Two', cols: 2, rows: 3, id: 'secondCard', image: '../../../assets/big.png'},
    {text: 'Three', cols: 2, rows: 3, id: 'thirdCard', image: '../../assets/little.png' },
    {text: 'Four', cols: 2, rows: 3, id: 'fourthCard', image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Pickle_Rick.jpg'},
    {text: 'Five', cols: 2, rows: 3, id: 'fifthCard', image: 'https://picsum.photos/200/300/?random'},
  ];
  mobileTiles: Tile[] = [
    {text: 'One', cols: 1, rows: 5, id: 'primaryCard', image: '../../../assets/home.png'},
    {text: 'Two', cols: 1, rows: 3, id: 'secondCard', image: '../../../assets/big.png'},
    {text: 'Three', cols: 1, rows: 3, id: 'thirdCard', image: '../../assets/little.png' },
    {text: 'Four', cols: 1, rows: 3, id: 'fourthCard', image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Pickle_Rick.jpg'},
    {text: 'Five', cols: 1, rows: 3, id: 'fifthCard', image: 'https://picsum.photos/200/300/?random'},
  ];
  
}
