import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/services';
import { ResponsiveService } from 'src/services/responsive.service';
import { ITile, mobileTiles, tiles } from 'src/app/client-spec';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public isMobile: Boolean;
  public tiles: ITile[] = tiles;
  public mobileTiles: ITile[] = mobileTiles;
  constructor(
    private card: CardService,
    private responsiveService: ResponsiveService,
  ) { }
  ngOnInit() {
    this.onResize();
    this.responsiveService.checkWidth();
  }
  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }
}
