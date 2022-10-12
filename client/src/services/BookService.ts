import { IBook } from './../components/screens/Book/Book';
import { IPreviewBook } from '../components/PreviewBooks/PreviewBook';
import { AxiosResponse } from "axios";
import $api from "../http";


export default class BookService {
    static async getBooks(title: string, startIndex = 0): Promise<AxiosResponse<IPreviewBook[]>> {
        return $api.get<IPreviewBook[]>(`/book/getBooks/${title}/${startIndex}`);
    }

    static async getBook(id: string): Promise<AxiosResponse<IBook>> {
        return $api.get<IBook>(`/book/getBooks/${id}`);
    }
}