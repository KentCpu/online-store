export interface IPreviewBookResponse {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string,
        },
    },
    saleInfo: {
        isEbook: boolean;
        listPrice?: {
            amount: number,
            currencyCode: string,
        }
    }
}