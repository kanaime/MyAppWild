import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ImageOfTheDay } from './model/image-of-the-day';
import { Developper } from './models/developper';
import { Skill } from './models/skill';
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

