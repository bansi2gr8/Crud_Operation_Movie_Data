const UserController = require('./controller')
const express = require('express');
const router = express.Router();

router.post('/create-movie', UserController.insertMoviesData);
router.post('/insert-movies', UserController.insertMovies);
router.get('/get-all-movies', UserController.getAllmovies);
router.get('/get-movie/:movieName',UserController.getMovie);
router.put('/update-movie',UserController.UpdateMovieData);
router.delete('/delete-movie/:id',UserController.deleteMovie);

module.exports = router;