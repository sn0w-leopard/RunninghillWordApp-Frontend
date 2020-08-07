import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayViewComponent } from './pages/display-view/display-view.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo:'RunninghillWordApp', pathMatch: "full"},
  {path: 'RunninghillWordApp', component: DisplayViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
