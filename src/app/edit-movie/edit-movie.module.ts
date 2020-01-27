import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EditMoviePageRoutingModule } from './edit-movie-routing.module';

import { EditMoviePage } from './edit-movie.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditMoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditMoviePage]
})
export class EditMoviePageModule { }
