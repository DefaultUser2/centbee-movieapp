import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.page.html',
  styleUrls: ['./edit-movie.page.scss'],
})
export class EditMoviePage implements OnInit {

  updateMovieForm: FormGroup;
  id: any;

  constructor(
    private movieAPI: MovieService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getMovieData(this.id);
    this.updateMovieForm = this.fb.group({
      movie_name: [''],
      movie_summary: ['']
    })
  }

  getMovieData(id) {
    this.movieAPI.getMovie(id).subscribe(res => {
      this.updateMovieForm.setValue({
        movie_name: res['movie_name'],
        movie_summary: res['movie_summary']
      });
    });
  }

  updateForm() {
    if (!this.updateMovieForm.valid) {
      return false;
    } else {
      this.movieAPI.updateMovie(this.id, this.updateMovieForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateMovieForm.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}
