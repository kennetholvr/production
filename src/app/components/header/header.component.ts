import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/services/responsive.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMobile: Boolean;

  constructor(private responsiveService:ResponsiveService,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }

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
