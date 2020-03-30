// Require modules
const express = require('express');
const path = require('path');
const todoDb = require('./data/todo-db');
const games = require('./data/games-db');
const music = require('./data/music-db');
const tvShows = require('./data/tvShows-db');
// const bootstrap = require('bootstrap')
// Create the Express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/css', express.static(__dirname + '/css'));
// Mount middleware (app.use)


// Mount routes
app.get('/', function (req, res) {
    res.send('<h1>Hello Express</h1>');
    res.redirect('/home');
});

app.get('/home', function (req, res) {
    res.send('<h1>Home Page</h1>')
    res.render('home');
});

app.get('/todos', function (req, res) {
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
});

app.get('/games', function (req, res) {
    res.render('games/index', {
        games: games.getAll()
    });
});

app.get('/music', function (req, res) {
    res.render('music/index', {
        music: music.getAll()
    });
});

app.get('/tvshows', function (req, res) {
    res.render('tvShows/index', {
        tvShows: tvShows.getAll()
    });
});


// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
