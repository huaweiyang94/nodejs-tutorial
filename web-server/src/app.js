const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set template engine express handlebar (npm install hbs)
app.set('view engine', 'hbs');
// Set view path to templates folder (by default it is views folder)
app.set('views', viewsPath);

// Register handlebar partials
hbs.registerPartials(partialsPath);

// Use static content (css, images)
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    // The second arg is accessible in hbs
    res.render('index', {
        title: 'Weather',
        name: 'Kaguya'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Kaguya'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Kaguya',
        helpText: 'This is some helpful text.'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Vancouver'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kaguya',
        errorMessage: 'Help article not found.'
    });
});

// Match anything else (needs to stay at the bottom)
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Kaguya',
        errorMessage: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});