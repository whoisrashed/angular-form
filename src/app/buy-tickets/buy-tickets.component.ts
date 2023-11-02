import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent {

  
  contactForm:FormGroup;


  constructor( private fb :FormBuilder){
    this.contactForm = this.fb.group({
      name:[],
      mobileNo :[],
      address : this.fb.array([
        this.createAddressGroup()
      ])
    })
  }

  private createAddressGroup(){
    return this.fb.group({
      street :[],
      zipCode :[]
    });
  }


  get address (){
    return this.contactForm.get('address') as FormArray;
  }
  addAddress(){
    this.address.push(this.createAddressGroup())
  }

  removeAddress(index:number){
    this.address.removeAt(index)
  }
  submit(){
    console.log(this.contactForm.value)
  }
}
