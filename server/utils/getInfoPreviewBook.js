const getInfoPreviewBook = (book) => {
    return {
        id: book?.id,
        title: book.volumeInfo?.title,
        authors: book.volumeInfo?.authors ? book.volumeInfo.authors.join(", ") : "The author is not specified",
        coverLink: book.volumeInfo.imageLinks?.smallThumbnail,
        isAvailable: book.saleInfo?.listPrice ? true : false,
        description: book.volumeInfo?.description,
        price: book.saleInfo?.listPrice ?
            `${Math.round(book.saleInfo.listPrice.amount)} ${book.saleInfo.listPrice.currencyCode}`
            :
            "Not in availability"
        ,
    }
}

module.exports = getInfoPreviewBook;