import  {AxiosResponse} from "axios";
import $api from "../http";
import {IPreviewBookResponse} from "../types/IPreviewBookResponse";
import {IBookResponse} from "../types/IBookResponse";


export default class BookService {
    static async getBooks(title: string, startIndex = 0): Promise<AxiosResponse> {
        return  $api.get<IPreviewBookResponse[]>(`/book/getBooks/${title}/${startIndex}`);
    }

    static async getBook(id: string): Promise<AxiosResponse> {
        return  $api.get<IBookResponse>(`/book/getBooks/${id}`);
    }
}