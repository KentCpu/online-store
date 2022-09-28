import  {AxiosResponse} from "axios";
import $api from "../http";
import {IPreviewBook} from "../types/IPreviewBook";
import {IBook} from "../types/IBook";


export default class BookService {
    static async getBooks(title: string, startIndex = 0): Promise<AxiosResponse> {
        return  $api.get<IPreviewBook[]>(`/book/getBooks/${title}/${startIndex}`);
    }

    static async getBook(id: string): Promise<AxiosResponse> {
        return  $api.get<IBook>(`/book/getBooks/${id}`);
    }
}