import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter-simple/counter/counter.component';
import { CounterButtonsComponent } from './counter-simple/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-simple/counter-output/counter-output.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
