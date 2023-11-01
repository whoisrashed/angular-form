import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  regForm = new FormGroup({
    userName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })


  signUp() {
    console.log(this.regForm.value, this.regForm)
  }

}
