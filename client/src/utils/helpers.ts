import {ChangeEvent} from "react";
import {IPreviewBookResponse} from "../types/IPreviewBookResponse";
import {IPreviewBook} from "../components/screens/PreviewBooks/PreviewBook";
import {IBookResponse} from "../types/IBookResponse";
import {IBook} from "../components/screens/Book/Book";


export const handleChange = <T>(event: ChangeEvent<HTMLInputElement>, setData: Function) => {
    setData((data: T) => {
        return {...data, [event.target.name]: event.target.value};
    });
}

export const getCurrentYear = () => {
    return new Date().getFullYear();
}

export const getInfoPreviewBook = (book: IPreviewBookResponse): IPreviewBook  =>  {
    return {
        id: book?.id,
        title: book.volumeInfo?.title,
        authors: book.volumeInfo?.authors ? book.volumeInfo.authors.join(", ") : "The author is not specified",
        imageLink: book.volumeInfo.imageLinks?.smallThumbnail,
        isAvailable: book.saleInfo?.listPrice ? true: false,
        description: book.volumeInfo?.description,
        price: book.saleInfo?.listPrice?
            `${Math.round(book.saleInfo.listPrice.amount)} ${book.saleInfo.listPrice.currencyCode}`
            :
            "Not in availability"
        ,
    }
}

export const getInfoBook = (book: IBookResponse): IBook  =>  {
    const shortInfo = getInfoPreviewBook(book);
    return {
        ...shortInfo,
        pageCount: book.volumeInfo?.pageCount,
        language: book.volumeInfo?.language,
        publisher: book.volumeInfo?.publisher,
        publishedDate: new Date(book.volumeInfo?.publishedDate).getFullYear().toString(),
    }
}