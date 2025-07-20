require('../models/db');
const Movie = require('../models/movie')

exports.listMovies = async(req, res) => {
    res.send('Hello World 123')
}