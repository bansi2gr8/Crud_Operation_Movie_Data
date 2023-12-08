const { Movie } = require('./db')
// insert movie data
const insertMoviesData = async (req, res) => {
    try {
        let movieData = {
            "title": "The Shawshank Redemption",
            "year": 1994,
            "genre": ["Drama"],
            "director": "Frank Darabont",
            "cast": ["Tim Robbins", "Morgan Freeman"],
            "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "rating": 9.3
        }
        let data = new Movie(movieData)
        const movieInfo = await data.save()
        console.log(movieInfo);
        res.send(movieInfo)
    } catch (error) {
        console.log(error);
    }
}
// insert multiple movies data
const insertMovies = async (req,res) => {
    try {
        const movies = req.body
        const info = await Movie.insertMany(movies) 
        console.log(info);
        res.send(info) 
    } catch (error) {
        console.log(error);  
    }
}
//get all movies
const getAllmovies = async(req,res) => {
    try {
        const allMovies = await Movie.find();
        console.log(allMovies);
        res.send(allMovies);
    } catch (error) {
        console.log(error); 
    }
}
//get a movie by movie name
const getMovie = async(req,res) => {
    try {
        const movieName = req.params.movieName
        const result = await Movie.find({
            title : movieName
        });
        if(result.length != 0){
            console.log(result);
            res.send(result);
        }else{
            console.log('movie not found');
            res.send('movie not found');
        }
    } catch (error) {
        console.log(error);
    }
}
//update One movie
const UpdateMovieData = async(req,res) => {
    try {
        const id = req.body._id
        const updatData = req.body
        const updataInfo = await Movie.findByIdAndUpdate({_id : id},{$set : updatData},{new : true});
        console.log(updataInfo);
        res.send(updataInfo);
    } catch (error) {
        console.log(error);
    }
}
//delete movie any movie
const deleteMovie = async(req,res) => {
    try {
        const id = req.params.id;
        const deleteData = await Movie.findByIdAndDelete({_id : id}, {new : true});
        console.log(deleteData);
        res.send(deleteData)
    } catch (error) {
        console.log(error);
    }
} 
module.exports = {
    insertMoviesData,
    insertMovies, 
    getAllmovies,
    getMovie,
    UpdateMovieData,
    deleteMovie
}