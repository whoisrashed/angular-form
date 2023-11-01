import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

regForm :FormGroup;


constructor( private fb:FormBuilder){


  this.regForm = this.fb.group({
    userName:['',Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)
    ])],

    email:[''],
    password:['']
  })
}



signUp(){
  console.log(this.regForm.value , this.regForm)
}

}
