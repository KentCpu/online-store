const fetch = require('node-fetch');
const getInfoBook = require('../utils/getInfoBook');
const getInfoPreviewBook = require("../utils/getInfoPreviewBook");


class BookController {
    apiUrl = 'https://www.googleapis.com/books/v1/volumes';
    apiKey = 'AIzaSyB1A36pKCoIs9btNvWdV3Y5pxM8wpevAj0';

    constructor() {
        this.getBooks = this.getBooks.bind(this);
        this.getBook = this.getBook.bind(this);
    }

    async getBooks(req, res, next) {
        try {
            const { name, startIndex } = req.params;
            const URL = `${this.apiUrl}?printType=books&maxResults=10&startIndex=${startIndex}&q=${name}&key=${this.apiKey}`;
            const request = await fetch(URL);
            const response = await request.json();
            const foundBooks = response.items?.map(book => getInfoPreviewBook(book));

            return res.json(foundBooks);
        } catch (e) {
            next(e);
        }
    };

    async getBook(req, res, next) {
        try {
            const idBook = req.params.id;
            const URL = `${this.apiUrl}/${idBook}?key=${this.apiKey}`;
            const request = await fetch(URL);
            const response = await request.json();
            const book = getInfoBook(response);

            return res.json(book);
        } catch (e) {
            next(e);
        }
    };
}

module.exports = new BookController();