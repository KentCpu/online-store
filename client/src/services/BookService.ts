import  {AxiosResponse} from "axios";
import $api from "../http";
import {IBook} from "../types/IBook";


export default class BookService {
    static async getBooks(title: string, startIndex = 0): Promise<AxiosResponse> {
        return  $api.get<IBook[]>(`/book/getBooks/${title}/${startIndex}`);
    }
}