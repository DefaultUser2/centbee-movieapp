import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'add-movie',
    loadChildren: () => import('./add-movie/add-movie.module').then(m => m.AddMoviePageModule)
  },
  {
    path: 'edit-movie/:id',
    loadChildren: () => import('./edit-movie/edit-movie.module').then(m => m.EditMoviePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
