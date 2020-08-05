import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayViewComponent} from './pages/display-view/display-view.component';

const routes: Routes = [
  {path: '', component: DisplayViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
