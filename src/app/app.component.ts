import { Component , OnInit } from '@angular/core';
import { ResponsiveService } from 'src/services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'production';

  constructor(private responsiveService:ResponsiveService){
  }

  ngOnInit(){
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile detected')
      } else {
        console.log('Desktop detected')
      }
    });
    this.onResize();
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}
