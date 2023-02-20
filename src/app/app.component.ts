import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Developper } from './models/developper';
import { Skill } from './models/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSubmitted =false;
  dev?:Developper;


  submit(form: NgForm) {
    this.isSubmitted = true;

   let  skill=
    [new Skill(form.value.skill1,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png','https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.m.wikipedia.org%2Fwiki%2FFichier%3ALEGO_logo.svg&psig=AOvVaw3oFQa6Djs3Ha5et1VRIUN2&ust=1676979451734000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCa-aCBpP0CFQAAAAAdAAAAABAE'),
    new Skill(form.value.skill2,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png','https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.m.wikipedia.org%2Fwiki%2FFichier%3ALEGO_logo.svg&psig=AOvVaw3oFQa6Djs3Ha5et1VRIUN2&ust=1676979451734000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCa-aCBpP0CFQAAAAAdAAAAABAE')];

    this.dev = new Developper(
      form.value.firstname,
      form.value.lastname,
      form.value.age,
      form.value.gender,
      form.value.bio,
      skill
      );

      console.log(this.dev);

    return this.dev;
  }
}
