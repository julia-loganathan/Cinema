const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const { connect } = require('./database/connexion');
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d\'accueil');
});

app.use(cors());


const Movie = require('./models/movies');

connect()

app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des films' });
    }
});

// Film par ID
app.get('/api/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Film non trouvé' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du film' });
    }
});

// Ajouter un nouveau film
app.post('/api/movies', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du film' });
    }
});

// Mettre à jour un film
app.put('/api/movies/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ error: 'Film non trouvé' });
        }
        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du film' });
    }
});

// Supprimer un film
app.delete('/api/movies/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndRemove(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({ error: 'Film non trouvé' });
        }
        res.json(deletedMovie);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression du film' });
    }
});

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});