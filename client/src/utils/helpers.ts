import {ChangeEvent} from "react";
import {IPreviewBook} from "../types/IPreviewBook";
import {PreviewBookProps} from "../components/screens/PreviewBook/PreviewBook";
import {IBook} from "../types/IBook";
import {IBookView} from "../components/screens/BookView/BookView";


export const handleChange = <T>(event: ChangeEvent<HTMLInputElement>, setData: Function) => {
    setData((data: T) => {
        return {...data, [event.target.name]: event.target.value};
    });
}

export const getCurrentYear = () => {
    return new Date().getFullYear();
}


export const getInfoPreviewBook = (book: IPreviewBook): PreviewBookProps  =>  {
    return {
        id: book?.id,
        title: book.volumeInfo?.title,
        authors: book.volumeInfo?.authors ? book.volumeInfo.authors.join(", ") : "The author is not specified",
        imageLink: book.volumeInfo.imageLinks?.smallThumbnail,
        isAvailable: book.saleInfo?.listPrice ? true: false,
        price: book.saleInfo?.listPrice?
            `${Math.round(book.saleInfo.listPrice.amount)} ${book.saleInfo.listPrice.currencyCode}`
            :
            "Not in availability"
        ,
    }
}

export const getInfoBook = (book: IBook): IBookView  =>  {
    const shortInfo = getInfoPreviewBook(book);
    return {
        ...shortInfo,
        description: book.volumeInfo?.description,
        pageCount: book.volumeInfo?.pageCount,
        language: book.volumeInfo?.language,
        publisher: book.volumeInfo?.publisher,
        publishedDate: new Date(book.volumeInfo?.publishedDate).getFullYear().toString(),
        imageLink: book.volumeInfo?.imageLinks?.small,
    }
}