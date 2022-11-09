import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kalkulator1Component } from './kalkulator1/kalkulator1.component';
import { Kalkulator2Component } from './kalkulator2/kalkulator2.component';
import { Kalkulator3Component } from './kalkulator3/kalkulator3.component';

const routes: Routes = [
  {path:'kalkulator1-component',component:Kalkulator1Component},
  {path:'kalkulator2-component',component:Kalkulator2Component},
  {path:'kalkulator3-component',component:Kalkulator3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
