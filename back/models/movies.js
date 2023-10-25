const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    actors: {
        type: [String],
    },
    director: {
        type: String,
    },
    releaseDate: {
        type: Date,
    },
    genre: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});

module.exports = mongoose.model('Movie', movieSchema, 'movies'); 
