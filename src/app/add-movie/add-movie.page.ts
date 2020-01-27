import { Component, OnInit, NgZone } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})

export class AddMoviePage implements OnInit {

  movieForm: FormGroup;

  constructor(
    private movieAPI: MovieService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.movieForm = this.fb.group({
      movie_name: [''],
      movie_summary: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.movieForm.valid) {
      return false;
    } else {
      this.movieAPI.addMovie(this.movieForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.movieForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }

}
