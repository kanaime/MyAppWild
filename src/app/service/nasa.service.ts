import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, subscribeOn, tap } from 'rxjs';
import { ImageOfTheDay } from '../model/image-of-the-day';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  public cocktailApi = "https://api.nasa.gov/planetary/apod?api_key=1F9hzIJbD3Vv2Jsck4CweObUfc0P2N0nowSjmPDA";

  constructor(public http: HttpClient) { }

  public getImageOfTheDay(){

    return this.http.get(this.cocktailApi) as Observable<ImageOfTheDay>;
  }

}
