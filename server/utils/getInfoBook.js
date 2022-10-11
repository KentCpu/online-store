const getInfoPreviewBook = require("../utils/getInfoPreviewBook");

const getInfoBook = (book) => {
    const shortInfo = getInfoPreviewBook(book);
    return {
        ...shortInfo,
        pageCount: book.volumeInfo?.pageCount,
        language: book.volumeInfo?.language,
        publisher: book.volumeInfo?.publisher,
        publishedDate: new Date(book.volumeInfo?.publishedDate).getFullYear().toString(),
    }
}

module.exports = getInfoBook;