import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    BuyTicketsComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
