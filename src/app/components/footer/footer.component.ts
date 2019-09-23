import { Component, OnInit } from '@angular/core';
import { copyright } from '../../client-spec';
import { ResponsiveService } from 'src/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyright: string = copyright;
  public isMobile: boolean;
  constructor(private responsiveService: ResponsiveService) { }
  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
  ngOnInit() {
    this.onResize()
    this.responsiveService.checkWidth();
  }

}
