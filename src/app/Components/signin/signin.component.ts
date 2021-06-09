import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  condition=false;
  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signInForm: NgForm){
    console.log(signInForm);
    let email=signInForm.form.controls.email.value
    if(email==null){
      this.condition=true;
    }
    console.log(signInForm.value.emailAddressField);
  }
}
