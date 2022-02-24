import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Primeng Modules
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter-simple/counter/counter.component';
import { CounterButtonsComponent } from './counter-simple/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-simple/counter-output/counter-output.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CounterNgrxComponent } from './counter-ngrx/counter-ngrx/counter-ngrx.component';
import { CounterButtonsNgrxComponent } from './counter-ngrx/counter-buttons-ngrx/counter-buttons-ngrx.component';
import { CounterOutputNgrxComponent } from './counter-ngrx/counter-output-ngrx/counter-output-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-ngrx/counter.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    HomeComponent,
    CounterNgrxComponent,
    CounterButtonsNgrxComponent,
    CounterOutputNgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputNumberModule,
    RouterModule,
    FormsModule,
    StoreModule.forRoot({ nanana: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
