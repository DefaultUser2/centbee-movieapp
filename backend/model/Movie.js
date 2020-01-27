const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Movie = new Schema({
  movie_name: {
    type: String
  },
  movie_summary: {
    type: String
  }
}, {
  collection: 'movies'
})

module.exports = mongoose.model('Movie', Movie)