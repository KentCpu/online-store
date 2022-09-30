import {IPreviewBookResponse} from "./IPreviewBookResponse";

export interface IBookResponse extends IPreviewBookResponse{
    volumeInfo: {
        title: string,
        authors: string[],
        language: string,
        description: string,
        pageCount: number,
        publisher: string,
        publishedDate: string,
        imageLinks : {
            smallThumbnail: string,
            thumbnail: string,
            small: string,
            medium: string,
            large: string,
            extraLarge: string,
        }
    }
}