import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from
    '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevelopperComponent } from './07-Communication/developper/developper.component';
import { SkillComponent } from './07-Communication/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
