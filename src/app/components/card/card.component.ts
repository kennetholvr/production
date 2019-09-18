import { Component, OnInit, Input } from '@angular/core';
import { heading } from '../../client-spec';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() public image: string;
  @Input() public id: number;
  @Input() public title: string;
  public isPrimary: boolean;
  public heading: string = heading;
  ngOnInit() {
    this.isPrimary = this.id === 1;
    console.log(this.title, this.heading)
  }
}
