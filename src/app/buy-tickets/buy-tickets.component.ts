import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
export class Movie {
  name: string;
  cinemaHall: string;
  timing: string;
  constructor(name: string, cinemaHall: string, timing: string) {
    this.name = name;
    this.cinemaHall = cinemaHall;
    this.timing = timing;
  }
}

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent {

  bookMovieForm!: FormGroup;
  model!: Movie;
  submittedModel: any;
  uName!: string;
  movies!: string[];
  cinemaHalls!: string[];
  movieTimings!: string[];
  submitted: boolean = false;

  

  dynamicForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.uName = "";
    this.model = new Movie("Titanic", "Classic Cinemas", "21:30");
    this.movies = ["Titanic", "Ice Age 3", "Jumanji"];
    this.cinemaHalls = ["Classic Cinemas", "NY Studios", "Mega Screens"];
    this.movieTimings = ["10:10", "13:40", "5:25", "21:30"];

    this.bookMovieForm = this.formBuilder.group({
      uName: [this.uName, Validators.required],
      name: [this.model.name, Validators.required],
      cinemaHall: [this.model.cinemaHall, Validators.required],
      timing: [this.model.timing, Validators.required]
    });


    this.dynamicForm = this.formBuilder.group({
      tickets: new FormArray([])
    });
    this.addTickets();
  }

  // convenience getters for easy access to form fields
  get f() {
    return this.dynamicForm.controls;
  }
  get t() {
    return this.f['tickets'] as FormArray;
  }

  addTickets() {
    this.t.push(
      this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      })
    );
  }

  remove(index: number) {
    this.t.removeAt(index);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4)
    );
  }

  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
  }
}
