const fetch = require('node-fetch');

class BookController {

    async getBooks(req, res, next) {
        const apiURL = 'https://www.googleapis.com/books/v1/volumes';
        const apiKey = 'AIzaSyB1A36pKCoIs9btNvWdV3Y5pxM8wpevAj0';
        const nameBook = req.params.name;
        const URL = `${apiURL}?key=${apiKey}&maxResults=10&q=${nameBook}`;
        const request = await fetch(URL);
        const result = await request.json();
        return res.json(result);
    }
}

module.exports = new BookController();