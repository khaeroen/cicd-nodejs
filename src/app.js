
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/style.css">
            <title>Home</title>
        </head>
        <body>
            <h1>This Application is running properly! 🚀</h1>
        </body>
        </html>
    `);
});

app.get('/dewaweb', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/style.css">
            <title>Dewaweb</title>
        </head>
        <body>
            <h1>Hello Dewaweb!</h1>
        </body>
        </html>
    `);
});

module.exports = app;