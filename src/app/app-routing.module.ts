import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterNgrxComponent } from './counter-ngrx/counter-ngrx/counter-ngrx.component';
import { CounterComponent } from './counter-simple/counter/counter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter/simple', component: CounterComponent },
  { path: 'counter/ngrx', component: CounterNgrxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
