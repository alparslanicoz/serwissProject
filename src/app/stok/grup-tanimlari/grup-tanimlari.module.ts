import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrupTanimlariComponent } from './grup-tanimlari.component';
import {StokComponent} from "../stok.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: StokComponent,
    children: [
      { path: 'grup', component: GrupTanimlariComponent }
              ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [GrupTanimlariComponent]
})
export class GrupTanimlariModule { }
