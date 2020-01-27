import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddMoviePageRoutingModule } from './add-movie-routing.module';

import { AddMoviePage } from './add-movie.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddMoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddMoviePage]
})
export class AddMoviePageModule { }
