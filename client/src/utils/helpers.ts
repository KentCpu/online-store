import {ChangeEvent} from "react";
import {IBook} from "../types/IBook";
import {IBookProps} from "../components/Book/Book";

export const handleChange = <T>(event: ChangeEvent<HTMLInputElement>, setData: Function) => {
    setData((data: T) => {
        return {...data, [event.target.name]: event.target.value};
    });
}

export const getCurrentYear = () => {
    return new Date().getFullYear();
}

export const getInfoBook = (book: IBook): IBookProps => {
    return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors?.join(", "),
        imageLink: book.volumeInfo.imageLinks?.smallThumbnail,
        isAvailable: book.saleInfo?.listPrice ? true: false,
        price: book.saleInfo?.listPrice?
            `${Math.round(book.saleInfo.listPrice.amount)} ${book.saleInfo.listPrice.currencyCode}`
            :
            "Not in availability"
        ,
    }
}