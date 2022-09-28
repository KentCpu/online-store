const fetch = require('node-fetch');

class BookController {


    async getBooks(req, res, next) {
        const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
        const apiKey = 'AIzaSyB1A36pKCoIs9btNvWdV3Y5pxM8wpevAj0';
        const nameBook = req.params.name;
        const startIndex = req.params?.startIndex;
        const URL = `${apiUrl}?key=${apiKey}&maxResults=10&startIndex=${startIndex}&q=${nameBook}`;
        const request = await fetch(URL);
        const result = await request.json();
        return res.json(result);
    }

    async getBook(req, res, next) {
        const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
        const apiKey = 'AIzaSyB1A36pKCoIs9btNvWdV3Y5pxM8wpevAj0';
        const idBook = req.params.id;
        const URL = `${apiUrl}/${idBook}?key=${apiKey}`;
        const request = await fetch(URL);
        const book = await request.json();
        return res.json(book);
    }
}

module.exports = new BookController();