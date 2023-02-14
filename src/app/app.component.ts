import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <Strong>{{title}}</Strong>
  <button (click)="toggle(isAdmin)">
  View
  </button>
  <button *ngIf="isAdmin">
    Edit
  </button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour';
  isAdmin: boolean = false;
  toggle(bool: boolean){
    this.isAdmin = !bool;
  }

}
