import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Developper } from 'src/app/models/developper';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent {
   @Input() dev?: Developper ;

submitSkill(form: NgForm){
  let skill: Skill = form.value;
  this.dev?.skills.push(skill);
}
}
