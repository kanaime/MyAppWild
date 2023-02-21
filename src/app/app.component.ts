import { Component, OnInit } from '@angular/core';
import { ImageOfTheDay } from './model/image-of-the-day';
import { NasaService } from './service/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  imgOfTheDay?: ImageOfTheDay;
constructor(private service:NasaService){

}

ngOnInit(): void {
  this.service.getImageOfTheDay().subscribe(response=> {
    this.imgOfTheDay = response;
  }
    );

}
getPost(){




console.log(this.imgOfTheDay);


}
}

