import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {
  user:User = {
    name : 'Doe',
    firstname : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  enableToggle(){
    let elem = document.getElementById('toggle');
    let age = document.getElementById('age');
    age!.classList.toggle('displayNone');

  }
  saverange(event: string) {
    this.user.quote = event;
  }
}
