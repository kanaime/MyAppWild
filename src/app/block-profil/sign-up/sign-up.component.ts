import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  public userForm!: FormGroup;
  submitted = false;



  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastname: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      password: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]]
    });

  }

  get f(): { [key: string]: AbstractControl } {



    return this.userForm.controls;
  }




  onSubmit(): void {
    this.submitted = true;


    if (this.userForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.userForm.value, null, 2));
  }
  constructor(
    private router:Router,
    private fb: FormBuilder
    ){}

}

