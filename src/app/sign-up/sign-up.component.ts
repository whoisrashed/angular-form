import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  form:FormGroup;

  constructor( private fb:FormBuilder){
    
    this.form = this.fb.group({
      name : [],
      skills : this.fb.array([
        new FormControl(),
        new FormControl(),
      ])
    })
  }


  get skills(){
    
    return this.form.get('skills') as FormArray;
  }

  addSkill(){
     this.skills.push(new FormControl())
  }

  submit(){
    console.log(this.form.value)
  }
}
