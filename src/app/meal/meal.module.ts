import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { MealComponent } from './meal.component';


@NgModule({
  declarations: [
    MealComponent
  ],
  imports: [
    CommonModule,
    MealRoutingModule
  ]
})
export class MealModule { }
