import { Component, OnInit } from '@angular/core';
import { MovieService } from './../shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Movies: any = [];

  constructor(
    private movieService: MovieService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.movieService.getMovieList().subscribe((res) => {
      console.log(res)
      this.Movies = res;
    })
  }

  deleteMovie(movie, i) {
    if (window.confirm('Do you want to delete user?')) {
      this.movieService.deleteMovie(movie._id)
        .subscribe(() => {
          this.Movies.splice(i, 1);
          console.log('Movie deleted!')
        }
        )
    }
  }
}
