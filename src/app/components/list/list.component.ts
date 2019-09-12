import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  photos: Array = ['src/assets/big.png', 'src/assets/home.png','src/assets/little.png'];

  constructor() { }

  ngOnInit() {
  }

}
