import { Component, VERSION } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isRequiredValidator, rangeDateValidator } from 'src/app/commons/validator';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  public form!: FormGroup;
  submitted: boolean = false;
  show = false;
  min = 1900;
  max = 2023;
  type = [
    {name: "film" },
    {name: "serie" },
    {name: "episode" },

  ];
  fiche = [
    {name: "complete"},
    {name: "courte"}
  ];



  ngOnInit(): void {
    this.form = this.fb.group({
     titreId: this.fb.group({
      identifiant: [null],
      titre: [null]
     },{validators: isRequiredValidator('identifiant', 'titre')}),
      type: [this.type[0].name],
      annee: [null, rangeDateValidator(this.min, this.max)],
      fiche: [null],
    });
    this.form.get('titreId.identifiant')?.valueChanges.subscribe(x => {
      this.show = true;
  })
  }

  public defaultValue(): void{
    this.form.patchValue({

      type: 'serie',
      annee: 2010,
      fiche: 'courte'
    })
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {

      console.log(this.form.controls);

      return;
    }else{

     let movie:Movie = this.form.value;
     console.log(movie);


    }

  }
  constructor(
    private router:Router,
    private fb: FormBuilder
    ){}


}
