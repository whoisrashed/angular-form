import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    BuyTicketsComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
