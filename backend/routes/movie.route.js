const express = require('express');
const app = express();
const movieRoute = express.Router();

let MovieModel = require('../model/Movie');

// Add Movie
movieRoute.route('/create-movie').post((req, res, next) => {
  MovieModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all movies
movieRoute.route('/').get((req, res) => {
  MovieModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single movie
movieRoute.route('/get-movie/:id').get((req, res) => {
  MovieModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update movie
movieRoute.route('/update-model/:id').put((req, res, next) => {
  MovieModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Movie successfully updated!')
    }
  })
})

// Delete movie
movieRoute.route('/delete-movie/:id').delete((req, res, next) => {
  MovieModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = movieRoute;