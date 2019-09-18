import { Component, OnInit } from '@angular/core';
import { copyright } from '../../client-spec';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyright: string = copyright;

  constructor() { }

  ngOnInit() {
  }

}
