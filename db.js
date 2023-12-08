const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/moviesData')
    .then(() => {
        console.log('connect to mongodb');
    })
    .catch((error) => {
        console.log(error);
    })

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: [{
        type: String,
        required: true
    }],
    director: {
        type: String,
        required: true
    },
    cast: [{
        type: String,
        required: true
    }],
    plot: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = {
    Movie
}

//study about mongoose what is mongoose 