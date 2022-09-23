import  {AxiosResponse} from "axios";
import $api from "../http";


export default class BookService {
    static async getBooks(title: string): Promise<AxiosResponse> {
        return  $api.get<any>(`/book/getBooks/${title}`);
    }
}